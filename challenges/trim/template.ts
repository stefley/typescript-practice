type Space = " " | "\n" | "\t"
type TrimL<S extends string> = S extends `${Space}${infer R}` ? TrimL<R> : S
type TrimR<S extends string> = S extends `${infer R}${Space}` ? TrimR<R> : S

type Trim<S extends string> = TrimR<TrimL<S>>