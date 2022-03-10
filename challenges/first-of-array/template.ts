type First<T extends any[]> = T extends {length:0} ? never : T[0]

type First2<T extends any[]> = T extends [] ? never : T[0]

type First3<T extends any[]> = T extends T[number] ? T[0] : never