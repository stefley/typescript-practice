type Join<T extends unknown[], U extends string | number> = T extends [infer F, ...infer R] ? `${F & string}${R["length"] extends 0 ? "" : U}${Join<R, U>}` : ""

// type Concat<L, M extends string, R> = `${L & string}${M}${R & string}`

// type Join<T extends any[], U extends number | string> = T extends [infer F, ...infer R] ? T['length'] extends 1 ? `${T[0]}` : Concat<F, `${U}`, Join<R, U>> : ''