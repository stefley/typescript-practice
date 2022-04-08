type WhiteSpace = " " | "\t" | "\n"
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer R}`
    ? TrimLeft<R>
    : S