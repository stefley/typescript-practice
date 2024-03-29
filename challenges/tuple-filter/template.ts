type FilterOut<T extends any[], F> = T extends [infer L, ...infer R]
    ? [L] extends [F]
        ? [...FilterOut<R, F>]
        : [L, ...FilterOut<R, F>]
    : []