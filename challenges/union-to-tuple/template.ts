// 'a' | 'b' | 'c' => ()=>'a' & ()=>'b' & ()=>'c'
// 知识点：函数参数类型是逆变的
// T extends any 利用了 extends 的 [distribute](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types) 特性。 因为任何类型都 extends any, 转化为 `((args: 'a') => any | (args: 'b') => any) extends (args: infer R) => any ? : R : never;`
//   [如果在 extends 中使用 infer。 对于给定的infer类型变量V，如果有候选类型是从协变的位置上推断出来的，那么V的类型是那些候选类型的联合。反之，如果有候选类型是从逆变的位置上推断出来的，那么V的类型是那些候选类型的交叉类型。否则V的类型是never。](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types)
// 根据上面这个原理， 因为 infer R 是在逆变的位置， 所以`infer R` 的值为候选类型的联合类型 `'a' & 'b'`
type UnionToIntersectionFn<U> = (U extends unknown ? (k: () => U) => void : never) extends (k: infer I) => void ? I : never;
// ()=>'a' & ()=>'b' & ()=>'c' => 'c'
// 知识点1：函数交叉类型与函数重载本质上一样
// 知识点2: https://github.com/Microsoft/TypeScript/issues/24275#issuecomment-390701982
type GetLastReturnType<U> = UnionToIntersectionFn<U> extends () => infer R ? R : never;

type UnionToTuple<U, T extends Array<unknown> = []> = [U] extends [never] ?
  T :
  UnionToTuple<Exclude<U, GetLastReturnType<U>>, [...T, GetLastReturnType<U>]>;