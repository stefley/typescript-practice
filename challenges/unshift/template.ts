type Equal<X,Y> = 
    (<T>() => T extends X ? 1 : 2) extends 
        (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends any[],U> = T extends [infer F, ...infer R] ? Equal<F,U> extends true ? true : Includes<R, U> : false;
type Unshift<T extends any[], U> =  Includes<T,U> extends true ? T : [U, ...T]
