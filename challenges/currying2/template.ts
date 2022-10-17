declare function DynamicParamsCurrying<T extends readonly any[], S extends any>(fn: (...args: T) => S):
    T extends []
        ? S
        : <R extends readonly any[]>(...args: R) => T extends [...R, ...infer U] ? ReturnType<typeof DynamicParamsCurrying<U,S>> : never;