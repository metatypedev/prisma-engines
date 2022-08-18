window.SIDEBAR_ITEMS = {"enum":[["Error","Enum used to store information about an error that has occurred during parsing."],["Info","Enum holding error information. Variants are defined for `Stream::Item` and `Stream::Range` as well as string variants holding easy descriptions."]],"struct":[["Errors","Struct which hold information about an error that occurred at a specific position. Can hold multiple instances of `Error` if more that one error occurred in the same position."],["Stream",""]],"type":[["ParseError","Convenience alias over `Errors` for `StreamOnce` types which makes it possible to specify the `Errors` type from a `StreamOnce` by writing `ParseError<I>` instead of `Errors<I::Item, I::Range, I::Position>`"]]};