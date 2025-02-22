use crate::NativeUpsert;
use async_trait::async_trait;
use prisma_value::PrismaValue;
use query_structure::*;
use std::collections::HashMap;
use telemetry::TraceParent;

#[async_trait]
pub trait Connector {
    /// Returns a connection to a data source.
    async fn get_connection(&self) -> crate::Result<Box<dyn Connection + Send + Sync>>;

    /// Returns the database system name, as per the OTEL spec.
    /// Reference:
    /// - https://opentelemetry.io/docs/specs/semconv/database/sql/
    /// - https://opentelemetry.io/docs/specs/semconv/database/mongodb/
    fn name(&self) -> &'static str;

    /// Returns whether a connector should retry an entire transaction when that transaction failed during its execution
    /// because of a transient transaction error. Note: This is specific to MongoDB for now.
    fn should_retry_on_transient_error(&self) -> bool;
}

#[async_trait]
pub trait Connection: ConnectionLike {
    async fn start_transaction<'a>(
        &'a mut self,
        isolation_level: Option<String>,
    ) -> crate::Result<Box<dyn Transaction + 'a>>;

    async fn version(&self) -> Option<String>;

    /// Explicit upcast.
    fn as_connection_like(&mut self) -> &mut dyn ConnectionLike;
}

#[async_trait]
pub trait Transaction: ConnectionLike {
    async fn commit(&mut self) -> crate::Result<()>;
    async fn rollback(&mut self) -> crate::Result<()>;

    async fn version(&self) -> Option<String>;

    /// Explicit upcast of self reference. Rusts current vtable layout doesn't allow for an upcast if
    /// `trait A`, `trait B: A`, so that `Box<dyn B> as Box<dyn A>` works. This is a simple, explicit workaround.
    fn as_connection_like(&mut self) -> &mut dyn ConnectionLike;
}

/// Marker trait required by the query core executor to abstract connections and
/// transactions into something that can is capable of writing to or reading from the database.
pub trait ConnectionLike: ReadOperations + WriteOperations + Send + Sync {}

pub type AggregationRow = Vec<AggregationResult>;

/// Result of an aggregation operation on a model or field.
/// A `Field` return type is only interesting for aggregations involving
/// group bys, as they return field values alongside group aggregates.
#[derive(Debug, Clone)]
pub enum AggregationResult {
    Field(ScalarFieldRef, PrismaValue),
    Count(Option<ScalarFieldRef>, PrismaValue),
    Average(ScalarFieldRef, PrismaValue),
    Sum(ScalarFieldRef, PrismaValue),
    Min(ScalarFieldRef, PrismaValue),
    Max(ScalarFieldRef, PrismaValue),
}

#[async_trait]
pub trait ReadOperations {
    /// Gets a single record or `None` back from the database.
    ///
    /// - The `ModelRef` represents the datamodel and its relations.
    /// - The `Filter` defines what item we want back and is guaranteed to be
    ///   defined to filter at most one item by the core.
    /// - The `FieldSelection` defines the values to be returned.
    async fn get_single_record(
        &mut self,
        model: &Model,
        filter: &Filter,
        selected_fields: &FieldSelection,
        relation_load_strategy: RelationLoadStrategy,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<Option<SingleRecord>>;

    /// Gets multiple records from the database.
    ///
    /// - The `ModelRef` represents the datamodel and its relations.
    /// - The `QueryArguments` defines various constraints (see docs for detailed explanation).
    /// - The `FieldSelection` defines the fields (e.g. columns or document fields)
    ///   to be returned as a projection of fields of the model it queries.
    async fn get_many_records(
        &mut self,
        model: &Model,
        query_arguments: QueryArguments,
        selected_fields: &FieldSelection,
        relation_load_strategy: RelationLoadStrategy,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<ManyRecords>;

    /// Retrieves pairs of IDs that belong together from a intermediate join
    /// table.
    ///
    /// Given the field from parent, and the projections, return the given
    /// projections with the corresponding child projections fetched from the
    /// database. The IDs returned will be used to perform a in-memory join
    /// between two datasets.
    async fn get_related_m2m_record_ids(
        &mut self,
        from_field: &RelationFieldRef,
        from_record_ids: &[SelectionResult],
        traceparent: Option<TraceParent>,
    ) -> crate::Result<Vec<(SelectionResult, SelectionResult)>>;

    /// Aggregates records for a specific model based on the given selections.
    /// Whether or not the aggregations can be executed in a single query or
    /// requires multiple roundtrips to the underlying data source is at the
    /// discretion of the implementing connector.
    /// `having` can only be a scalar filter. Relation elements can be safely ignored.
    async fn aggregate_records(
        &mut self,
        model: &Model,
        query_arguments: QueryArguments,
        selections: Vec<AggregationSelection>,
        group_by: Vec<ScalarFieldRef>,
        having: Option<Filter>,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<Vec<AggregationRow>>;
}

#[async_trait]
pub trait WriteOperations {
    /// Insert a single record to the database.
    async fn create_record(
        &mut self,
        model: &Model,
        args: WriteArgs,
        selected_fields: FieldSelection,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<SingleRecord>;

    /// Inserts many records at once into the database.
    async fn create_records(
        &mut self,
        model: &Model,
        args: Vec<WriteArgs>,
        skip_duplicates: bool,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<usize>;

    /// Inserts many records at once into the database and returns their
    /// selected fields.
    /// This method should not be used if the connector does not support
    /// returning created rows.
    async fn create_records_returning(
        &mut self,
        model: &Model,
        args: Vec<WriteArgs>,
        skip_duplicates: bool,
        selected_fields: FieldSelection,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<ManyRecords>;

    /// Update records in the `Model` with the given `WriteArgs` filtered by the
    /// `Filter`.
    async fn update_records(
        &mut self,
        model: &Model,
        record_filter: RecordFilter,
        args: WriteArgs,
        limit: Option<usize>,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<usize>;

    /// Updates many records at once into the database and returns their
    /// selected fields.
    /// This method should not be used if the connector does not support
    /// returning updated rows.
    async fn update_records_returning(
        &mut self,
        model: &Model,
        record_filter: RecordFilter,
        args: WriteArgs,
        selected_fields: FieldSelection,
        limit: Option<usize>,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<ManyRecords>;

    /// Update record in the `Model` with the given `WriteArgs` filtered by the
    /// `Filter`.
    async fn update_record(
        &mut self,
        model: &Model,
        record_filter: RecordFilter,
        args: WriteArgs,
        selected_fields: Option<FieldSelection>,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<Option<SingleRecord>>;

    /// Native upsert
    /// Use the connectors native upsert to upsert the `Model`
    async fn native_upsert_record(
        &mut self,
        upsert: NativeUpsert,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<SingleRecord>;

    /// Delete records in the `Model` with the given `Filter`.
    async fn delete_records(
        &mut self,
        model: &Model,
        record_filter: RecordFilter,
        limit: Option<usize>,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<usize>;

    /// Delete single record in the `Model` with the given `Filter` and returns
    /// selected fields of the deleted record.
    /// This method should not be used if the connector does not support returning
    /// deleted rows.
    async fn delete_record(
        &mut self,
        model: &Model,
        record_filter: RecordFilter,
        selected_fields: FieldSelection,
        traceparent: Option<TraceParent>,
    ) -> crate::Result<SingleRecord>;

    // We plan to remove the methods below in the future. We want emulate them with the ones above. Those should suffice.

    /// Connect the children to the parent (m2m relation only).
    async fn m2m_connect(
        &mut self,
        field: &RelationFieldRef,
        parent_id: &SelectionResult,
        child_ids: &[SelectionResult],
        traceparent: Option<TraceParent>,
    ) -> crate::Result<()>;

    /// Disconnect the children from the parent (m2m relation only).
    async fn m2m_disconnect(
        &mut self,
        field: &RelationFieldRef,
        parent_id: &SelectionResult,
        child_ids: &[SelectionResult],
        traceparent: Option<TraceParent>,
    ) -> crate::Result<()>;

    /// Execute the raw query in the database as-is.
    /// The parsing of the query arguments is deferred to the connectors.
    ///
    /// Returns the number of rows affected.
    async fn execute_raw(&mut self, inputs: HashMap<String, PrismaValue>) -> crate::Result<usize>;

    /// Execute the raw query in the database as-is.
    /// The parsing of the query arguments is deferred to the connectors.
    ///
    /// Returns resulting rows as JSON.
    async fn query_raw(
        &mut self,
        model: Option<&Model>,
        inputs: HashMap<String, PrismaValue>,
        query_type: Option<String>,
    ) -> crate::Result<RawJson>;
}
