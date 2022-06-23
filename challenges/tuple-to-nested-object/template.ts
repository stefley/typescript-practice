type TupleToNestedObject<T extends readonly any[], U> = T extends [infer F, ...infer R] ? {
    [key in Extract<T[number], F>]: TupleToNestedObject<R, U>
} : U