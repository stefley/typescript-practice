// type LookUp<U extends object, T extends string, P = U> = U extends U ?
//     [U] extends [P] ? T extends U[keyof U] ? U : never : never : never

type LookUp<T extends { type: string }, U extends string> = T extends { type: U } ? T : never;

