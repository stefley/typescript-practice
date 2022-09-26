type CapitalizeNestObjectKeys<T> = T extends readonly object[]
    ? T extends [infer F extends object, ...infer R extends object[]]
        ? [CapitalizeNestObjectKeys<F>, ...CapitalizeNestObjectKeys<R>]
        :T
    : T extends object
        ? { [J in keyof T as J extends string ? Capitalize<J> : J]: CapitalizeNestObjectKeys<T[J]>}
    : T