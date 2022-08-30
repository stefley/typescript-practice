// T extends any 利用了 extends 的 [distribute](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types) 特性。 因为任何类型都 extends any, 转化为 `((args: 'a') => any | (args: 'b') => any) extends (args: infer R) => any ? : R : never;`
//   [如果在 extends 中使用 infer。 对于给定的infer类型变量V，如果有候选类型是从协变的位置上推断出来的，那么V的类型是那些候选类型的联合。反之，如果有候选类型是从逆变的位置上推断出来的，那么V的类型是那些候选类型的交叉类型。否则V的类型是never。](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types)
// 根据上面这个原理， 因为 infer R 是在逆变的位置， 所以`infer R` 的值为候选类型的联合类型 `'a' & 'b'`
type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (arg: infer R) => void ? R : never

type GetProps<T,K> = K extends `${infer F}.${infer L}` ? {
    [K in F]: GetProps<T[F & keyof T], L>
} : K extends keyof T ? {[P in K]: T[P]} : never
type DeepPick<T, P> = UnionToIntersection<GetProps<T,P>>