type DeepReadonly<T> = T extends Record<string, unknown> ? {
    readonly [K in keyof T]: DeepReadonly<T[K]>
} : T