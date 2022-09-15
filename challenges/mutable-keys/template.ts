type IsEqual<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends  B ? 1 : 2) ? true : false

type MutableKeys<T extends Record<string, unknown>> = keyof {
    [K in keyof T as IsEqual<Pick<T, K>, Readonly<Pick<T,K>>> extends true ? never : K]: T[K]
}