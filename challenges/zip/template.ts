type Zip<T extends any[], U extends any[], Res extends any[] = []> = T extends [infer TF, ...infer TRest] ? U extends [infer UF, ...infer URest] ? Zip<TRest, URest, [...Res, [TF, UF]]> : Res : Res

// type GreatThan<T extends number, U extends number, Count extends unknown[] = []> = Count['length'] extends T
//     ? false
//     : Count['length'] extends U
//     ? true
//     : GreatThan<T, U, [unknown, ...Count]>

// type Zip<T extends unknown[], U extends unknown[]> = T extends [] ? [] : U extends [] ? [] :
//     GreatThan<T['length'], U['length']> extends true
//     ? {
//         [Key in keyof U]: [Key extends keyof T ? T[Key] : never, U[Key]]
//     }
//     : {
//         [Key in keyof T]: [T[Key], Key extends keyof U ? U[Key] : never]

//     }