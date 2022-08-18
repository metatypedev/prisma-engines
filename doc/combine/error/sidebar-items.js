window.SIDEBAR_ITEMS = {"enum":[["Consumed","Enum used to indicate if a parser consumed any items of the stream it was given as an input."],["FastResult",""],["Info",""],["StringStreamError",""],["UnexpectedParse",""]],"struct":[["Tracked","Error wrapper which lets parsers track which parser in a sequence of sub-parsers has emitted the error. `Tracked::from` can be used to construct this and it should otherwise be ignored outside of combine."]],"trait":[["ParseError","Trait which defines a combine parse error."],["StreamError","`StreamError` represents a single error returned from a `Stream` or a `Parser`."]],"type":[["ConsumedResult","A `Result` type which has the consumed status flattened into the result. Conversions to and from `std::result::Result` can be done using `result.into()` or `From::from(result)`"],["ParseResult","A type alias over the specific `Result` type used by parsers to indicate whether they were successful or not. `O` is the type that is output on success. `I` is the specific stream type used in the parser."],["ParseResult2",""]]};