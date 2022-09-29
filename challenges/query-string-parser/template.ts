type GetValue<S extends string> = S extends `${infer J}=${infer K}` ? {[P in J]: K} : {[P in S]: true}

type Merge<T, U> = {
  [p in (keyof T | keyof U)]: p extends keyof U ? p extends keyof T ? T[p] extends [...infer A] ? [...A, U[p]]
                                                                                                : T[p] extends U[p] ? T[p] 
                                                                                                                    : [T[p], U[p]]
                                                                  : U[p]
                                              : p extends keyof T ? T[p]
                                                                  : never
}

type ParseQueryString<S extends string, O extends object = {}, T extends string = ''> = 
S extends  `${infer J}${infer K}` ? J extends '&' ? ParseQueryString<K, Merge<O, GetValue<T>>, ''>
                                                  : ParseQueryString<K, O, `${T}${J}`>
                                  : T extends '' ? O
                                                 : Merge<O, GetValue<T>>