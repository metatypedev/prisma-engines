(function() {var implementors = {};
implementors["ahash"] = [{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;<a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;&gt; for &amp;<a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["ahash::hash_set::AHashSet"]}];
implementors["bitmaps"] = [{"text":"impl&lt;Size:&nbsp;<a class=\"trait\" href=\"bitmaps/trait.Bits.html\" title=\"trait bitmaps::Bits\">Bits</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"bitmaps/struct.Bitmap.html\" title=\"struct bitmaps::Bitmap\">Bitmap</a>&lt;Size&gt;&gt; for <a class=\"struct\" href=\"bitmaps/struct.Bitmap.html\" title=\"struct bitmaps::Bitmap\">Bitmap</a>&lt;Size&gt;","synthetic":false,"types":["bitmaps::bitmap::Bitmap"]}];
implementors["bitvec"] = [{"text":"impl&lt;O, V, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;O, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, V::<a class=\"associatedtype\" href=\"bitvec/view/trait.BitView.html#associatedtype.Store\" title=\"type bitvec::view::BitView::Store\">Store</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXorAssign.html\" title=\"trait core::ops::bit::BitXorAssign\">BitXorAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::array::BitArray"]},{"text":"impl&lt;O, T, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXorAssign.html\" title=\"trait core::ops::bit::BitXorAssign\">BitXorAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::boxed::BitBox"]},{"text":"impl&lt;O, T, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;O, T&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXorAssign.html\" title=\"trait core::ops::bit::BitXorAssign\">BitXorAssign</a>&lt;Rhs&gt;,&nbsp;</span>","synthetic":false,"types":["bitvec::vec::BitVec"]}];
implementors["datamodel"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"datamodel/common/preview_features/enum.PreviewFeature.html\" title=\"enum datamodel::common::preview_features::PreviewFeature\">PreviewFeature</a>&gt; for <a class=\"enum\" href=\"datamodel/common/preview_features/enum.PreviewFeature.html\" title=\"enum datamodel::common::preview_features::PreviewFeature\">PreviewFeature</a>","synthetic":false,"types":["datamodel::common::preview_features::PreviewFeature"]}];
implementors["datamodel_connector"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"datamodel_connector/enum.ReferentialIntegrity.html\" title=\"enum datamodel_connector::ReferentialIntegrity\">ReferentialIntegrity</a>&gt; for <a class=\"enum\" href=\"datamodel_connector/enum.ReferentialIntegrity.html\" title=\"enum datamodel_connector::ReferentialIntegrity\">ReferentialIntegrity</a>","synthetic":false,"types":["datamodel_connector::referential_integrity::ReferentialIntegrity"]}];
implementors["dml"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"dml/relation_info/enum.ReferentialAction.html\" title=\"enum dml::relation_info::ReferentialAction\">ReferentialAction</a>&gt; for <a class=\"enum\" href=\"dml/relation_info/enum.ReferentialAction.html\" title=\"enum dml::relation_info::ReferentialAction\">ReferentialAction</a>","synthetic":false,"types":["dml::relation_info::ReferentialAction"]}];
implementors["enumflags2"] = [{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;B&gt; for <a class=\"struct\" href=\"enumflags2/struct.BitFlags.html\" title=\"struct enumflags2::BitFlags\">BitFlags</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"enumflags2/trait.BitFlag.html\" title=\"trait enumflags2::BitFlag\">BitFlag</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"enumflags2/struct.BitFlags.html\" title=\"struct enumflags2::BitFlags\">BitFlags</a>&lt;T&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["enumflags2::BitFlags"]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, Global&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["hashlink"] = [{"text":"impl&lt;'a, 'b, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.LinkedHashSet.html\" title=\"struct hashlink::linked_hash_set::LinkedHashSet\">LinkedHashSet</a>&lt;T, S&gt;&gt; for &amp;'a <a class=\"struct\" href=\"hashlink/linked_hash_set/struct.LinkedHashSet.html\" title=\"struct hashlink::linked_hash_set::LinkedHashSet\">LinkedHashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["hashlink::linked_hash_set::LinkedHashSet"]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S2&gt;&gt; for &amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]}];
implementors["lsp_types"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"lsp_types/struct.WatchKind.html\" title=\"struct lsp_types::WatchKind\">WatchKind</a>&gt; for <a class=\"struct\" href=\"lsp_types/struct.WatchKind.html\" title=\"struct lsp_types::WatchKind\">WatchKind</a>","synthetic":false,"types":["lsp_types::WatchKind"]}];
implementors["mysql_common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.StatusFlags.html\" title=\"struct mysql_common::constants::StatusFlags\">StatusFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.StatusFlags.html\" title=\"struct mysql_common::constants::StatusFlags\">StatusFlags</a>","synthetic":false,"types":["mysql_common::constants::StatusFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.CapabilityFlags.html\" title=\"struct mysql_common::constants::CapabilityFlags\">CapabilityFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.CapabilityFlags.html\" title=\"struct mysql_common::constants::CapabilityFlags\">CapabilityFlags</a>","synthetic":false,"types":["mysql_common::constants::CapabilityFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.CursorType.html\" title=\"struct mysql_common::constants::CursorType\">CursorType</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.CursorType.html\" title=\"struct mysql_common::constants::CursorType\">CursorType</a>","synthetic":false,"types":["mysql_common::constants::CursorType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.StmtExecuteParamsFlags.html\" title=\"struct mysql_common::constants::StmtExecuteParamsFlags\">StmtExecuteParamsFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.StmtExecuteParamsFlags.html\" title=\"struct mysql_common::constants::StmtExecuteParamsFlags\">StmtExecuteParamsFlags</a>","synthetic":false,"types":["mysql_common::constants::StmtExecuteParamsFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.StmtExecuteParamFlags.html\" title=\"struct mysql_common::constants::StmtExecuteParamFlags\">StmtExecuteParamFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.StmtExecuteParamFlags.html\" title=\"struct mysql_common::constants::StmtExecuteParamFlags\">StmtExecuteParamFlags</a>","synthetic":false,"types":["mysql_common::constants::StmtExecuteParamFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.ColumnFlags.html\" title=\"struct mysql_common::constants::ColumnFlags\">ColumnFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.ColumnFlags.html\" title=\"struct mysql_common::constants::ColumnFlags\">ColumnFlags</a>","synthetic":false,"types":["mysql_common::constants::ColumnFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.Flags2.html\" title=\"struct mysql_common::constants::Flags2\">Flags2</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.Flags2.html\" title=\"struct mysql_common::constants::Flags2\">Flags2</a>","synthetic":false,"types":["mysql_common::constants::Flags2"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/constants/struct.SqlMode.html\" title=\"struct mysql_common::constants::SqlMode\">SqlMode</a>&gt; for <a class=\"struct\" href=\"mysql_common/constants/struct.SqlMode.html\" title=\"struct mysql_common::constants::SqlMode\">SqlMode</a>","synthetic":false,"types":["mysql_common::constants::SqlMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/packets/struct.BinlogDumpFlags.html\" title=\"struct mysql_common::packets::BinlogDumpFlags\">BinlogDumpFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/packets/struct.BinlogDumpFlags.html\" title=\"struct mysql_common::packets::BinlogDumpFlags\">BinlogDumpFlags</a>","synthetic":false,"types":["mysql_common::packets::BinlogDumpFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/binlog/consts/struct.EventFlags.html\" title=\"struct mysql_common::binlog::consts::EventFlags\">EventFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.EventFlags.html\" title=\"struct mysql_common::binlog::consts::EventFlags\">EventFlags</a>","synthetic":false,"types":["mysql_common::binlog::consts::EventFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/binlog/consts/struct.SemiSyncFlags.html\" title=\"struct mysql_common::binlog::consts::SemiSyncFlags\">SemiSyncFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.SemiSyncFlags.html\" title=\"struct mysql_common::binlog::consts::SemiSyncFlags\">SemiSyncFlags</a>","synthetic":false,"types":["mysql_common::binlog::consts::SemiSyncFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/binlog/consts/struct.GtidFlags.html\" title=\"struct mysql_common::binlog::consts::GtidFlags\">GtidFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.GtidFlags.html\" title=\"struct mysql_common::binlog::consts::GtidFlags\">GtidFlags</a>","synthetic":false,"types":["mysql_common::binlog::consts::GtidFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/binlog/consts/struct.RowsEventFlags.html\" title=\"struct mysql_common::binlog::consts::RowsEventFlags\">RowsEventFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.RowsEventFlags.html\" title=\"struct mysql_common::binlog::consts::RowsEventFlags\">RowsEventFlags</a>","synthetic":false,"types":["mysql_common::binlog::consts::RowsEventFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"mysql_common/binlog/consts/struct.UserVarFlags.html\" title=\"struct mysql_common::binlog::consts::UserVarFlags\">UserVarFlags</a>&gt; for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.UserVarFlags.html\" title=\"struct mysql_common::binlog::consts::UserVarFlags\">UserVarFlags</a>","synthetic":false,"types":["mysql_common::binlog::consts::UserVarFlags"]}];
implementors["num_bigint"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>","synthetic":false,"types":["num_bigint::bigint::BigInt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for &amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'a <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>&gt; for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>","synthetic":false,"types":["num_bigint::biguint::BigUint"]}];
implementors["openssl"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/cms/struct.CMSOptions.html\" title=\"struct openssl::cms::CMSOptions\">CMSOptions</a>&gt; for <a class=\"struct\" href=\"openssl/cms/struct.CMSOptions.html\" title=\"struct openssl::cms::CMSOptions\">CMSOptions</a>","synthetic":false,"types":["openssl::cms::CMSOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspFlag.html\" title=\"struct openssl::ocsp::OcspFlag\">OcspFlag</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspFlag.html\" title=\"struct openssl::ocsp::OcspFlag\">OcspFlag</a>","synthetic":false,"types":["openssl::ocsp::OcspFlag"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Flags.html\" title=\"struct openssl::pkcs7::Pkcs7Flags\">Pkcs7Flags</a>&gt; for <a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Flags.html\" title=\"struct openssl::pkcs7::Pkcs7Flags\">Pkcs7Flags</a>","synthetic":false,"types":["openssl::pkcs7::Pkcs7Flags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslOptions.html\" title=\"struct openssl::ssl::SslOptions\">SslOptions</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslOptions.html\" title=\"struct openssl::ssl::SslOptions\">SslOptions</a>","synthetic":false,"types":["openssl::ssl::SslOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslMode.html\" title=\"struct openssl::ssl::SslMode\">SslMode</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslMode.html\" title=\"struct openssl::ssl::SslMode\">SslMode</a>","synthetic":false,"types":["openssl::ssl::SslMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslVerifyMode.html\" title=\"struct openssl::ssl::SslVerifyMode\">SslVerifyMode</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslVerifyMode.html\" title=\"struct openssl::ssl::SslVerifyMode\">SslVerifyMode</a>","synthetic":false,"types":["openssl::ssl::SslVerifyMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslSessionCacheMode.html\" title=\"struct openssl::ssl::SslSessionCacheMode\">SslSessionCacheMode</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslSessionCacheMode.html\" title=\"struct openssl::ssl::SslSessionCacheMode\">SslSessionCacheMode</a>","synthetic":false,"types":["openssl::ssl::SslSessionCacheMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.ExtensionContext.html\" title=\"struct openssl::ssl::ExtensionContext\">ExtensionContext</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.ExtensionContext.html\" title=\"struct openssl::ssl::ExtensionContext\">ExtensionContext</a>","synthetic":false,"types":["openssl::ssl::ExtensionContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.ShutdownState.html\" title=\"struct openssl::ssl::ShutdownState\">ShutdownState</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.ShutdownState.html\" title=\"struct openssl::ssl::ShutdownState\">ShutdownState</a>","synthetic":false,"types":["openssl::ssl::ShutdownState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/x509/verify/struct.X509CheckFlags.html\" title=\"struct openssl::x509::verify::X509CheckFlags\">X509CheckFlags</a>&gt; for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509CheckFlags.html\" title=\"struct openssl::x509::verify::X509CheckFlags\">X509CheckFlags</a>","synthetic":false,"types":["openssl::x509::verify::X509CheckFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyFlags.html\" title=\"struct openssl::x509::verify::X509VerifyFlags\">X509VerifyFlags</a>&gt; for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyFlags.html\" title=\"struct openssl::x509::verify::X509VerifyFlags\">X509VerifyFlags</a>","synthetic":false,"types":["openssl::x509::verify::X509VerifyFlags"]}];
implementors["ordermap"] = [{"text":"impl&lt;'a, 'b, T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;&amp;'b <a class=\"struct\" href=\"ordermap/set/struct.OrderSet.html\" title=\"struct ordermap::set::OrderSet\">OrderSet</a>&lt;T, S2&gt;&gt; for &amp;'a <a class=\"struct\" href=\"ordermap/set/struct.OrderSet.html\" title=\"struct ordermap::set::OrderSet\">OrderSet</a>&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["ordermap::set::OrderSet"]}];
implementors["parser_database"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"parser_database/enum.ReferentialAction.html\" title=\"enum parser_database::ReferentialAction\">ReferentialAction</a>&gt; for <a class=\"enum\" href=\"parser_database/enum.ReferentialAction.html\" title=\"enum parser_database::ReferentialAction\">ReferentialAction</a>","synthetic":false,"types":["parser_database::relations::ReferentialAction"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"parser_database/enum.SchemaFlags.html\" title=\"enum parser_database::SchemaFlags\">SchemaFlags</a>&gt; for <a class=\"enum\" href=\"parser_database/enum.SchemaFlags.html\" title=\"enum parser_database::SchemaFlags\">SchemaFlags</a>","synthetic":false,"types":["parser_database::types::SchemaFlags"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"parser_database/enum.IndexAlgorithm.html\" title=\"enum parser_database::IndexAlgorithm\">IndexAlgorithm</a>&gt; for <a class=\"enum\" href=\"parser_database/enum.IndexAlgorithm.html\" title=\"enum parser_database::IndexAlgorithm\">IndexAlgorithm</a>","synthetic":false,"types":["parser_database::types::IndexAlgorithm"]}];
implementors["rusqlite"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"rusqlite/struct.OpenFlags.html\" title=\"struct rusqlite::OpenFlags\">OpenFlags</a>&gt; for <a class=\"struct\" href=\"rusqlite/struct.OpenFlags.html\" title=\"struct rusqlite::OpenFlags\">OpenFlags</a>","synthetic":false,"types":["rusqlite::OpenFlags"]}];
implementors["sql_schema_describer"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"sql_schema_describer/mssql/enum.IndexBits.html\" title=\"enum sql_schema_describer::mssql::IndexBits\">IndexBits</a>&gt; for <a class=\"enum\" href=\"sql_schema_describer/mssql/enum.IndexBits.html\" title=\"enum sql_schema_describer::mssql::IndexBits\">IndexBits</a>","synthetic":false,"types":["sql_schema_describer::mssql::IndexBits"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"sql_schema_describer/postgres/enum.Circumstances.html\" title=\"enum sql_schema_describer::postgres::Circumstances\">Circumstances</a>&gt; for <a class=\"enum\" href=\"sql_schema_describer/postgres/enum.Circumstances.html\" title=\"enum sql_schema_describer::postgres::Circumstances\">Circumstances</a>","synthetic":false,"types":["sql_schema_describer::postgres::Circumstances"]}];
implementors["subtle"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>&gt; for <a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>","synthetic":false,"types":["subtle::Choice"]}];
implementors["test_setup"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"test_setup/enum.Capabilities.html\" title=\"enum test_setup::Capabilities\">Capabilities</a>&gt; for <a class=\"enum\" href=\"test_setup/enum.Capabilities.html\" title=\"enum test_setup::Capabilities\">Capabilities</a>","synthetic":false,"types":["test_setup::capabilities::Capabilities"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"enum\" href=\"test_setup/enum.Tags.html\" title=\"enum test_setup::Tags\">Tags</a>&gt; for <a class=\"enum\" href=\"test_setup/enum.Tags.html\" title=\"enum test_setup::Tags\">Tags</a>","synthetic":false,"types":["test_setup::tags::Tags"]}];
implementors["tracing_subscriber"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>&gt; for <a class=\"struct\" href=\"tracing_subscriber/fmt/format/struct.FmtSpan.html\" title=\"struct tracing_subscriber::fmt::format::FmtSpan\">FmtSpan</a>","synthetic":false,"types":["tracing_subscriber::fmt::format::FmtSpan"]}];
implementors["typenum"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":false,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":false,"types":["typenum::bit::B1"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>","synthetic":false,"types":["typenum::bit::B0"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>","synthetic":false,"types":["typenum::bit::B1"]},{"text":"impl&lt;Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Ur&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Bl:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/ops/bit/trait.BitXor.html\" title=\"trait core::ops::bit::BitXor\">BitXor</a>&lt;Ur&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;: PrivateXor&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PrivateXorOut&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;, Ur&gt;: Trim,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()