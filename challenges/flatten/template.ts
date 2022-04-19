type Flatten<T extends any[]> = T extends [infer F, ...infer R] 
    ? [...(F extends any[] ? Flatten<F> : [F]), ...Flatten<R>]
    : T

/* 
type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
    ? F extends unknown[]
        ?   [...Flatten<F>,...Flatten<R>] 
        :   [F, ...Flatten<R>]
    : T
*/