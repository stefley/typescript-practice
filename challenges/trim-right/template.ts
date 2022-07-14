type WhiteSpace = " " | "\t" | "\n"
type TrimRight<S extends string> = S  extends `${infer R}${WhiteSpace}` ? TrimRight<R> : S