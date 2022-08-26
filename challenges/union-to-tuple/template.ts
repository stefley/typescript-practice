// 'a' | 'b' | 'c' => ()=>'a' & ()=>'b' & ()=>'c'
// 知识点：函数参数类型是逆变的
type UnionToIntersectionFn<U> = (U extends unknown ? (k: () => U) => void : never) extends (k: infer I) => void ? I : never;
// ()=>'a' & ()=>'b' & ()=>'c' => 'c'
// 知识点1：函数交叉类型与函数重载本质上一样
// 知识点2: https://github.com/Microsoft/TypeScript/issues/24275#issuecomment-390701982
type GetLastReturnType<U> = UnionToIntersectionFn<U> extends () => infer R ? R : never;

type UnionToTuple<U, T extends Array<unknown> = []> = [U] extends [never] ?
  T :
  UnionToTuple<Exclude<U, GetLastReturnType<U>>, [...T, GetLastReturnType<U>]>;