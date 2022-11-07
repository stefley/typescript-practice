// type Sum<A extends string | number | bigint, B extends string | number | bigint> = string

type Num = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type NumMap<T extends unknown[]> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T],
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown,],
  '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown,],
  '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown,],
  '4': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown,],
  '5': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown,],
  '6': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown,],
  '7': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown, unknown,],
  '8': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown,],
  '9': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown,],
}

type GetArr<N, T extends unknown[] = []> = N extends Num ? NumMap<T>[N] : []

// 方法一：暴力扩展数组
// 类型生成的元组类型太大，无法表示
// type StringToArr<S extends string, R extends any[] = []> = S extends `${infer F}${infer Rest}` ? StringToArr<Rest, GetArr<F, R>> : R
// type Sum<A extends string | number | bigint, B extends string | number | bigint> = [...StringToArr<`${A}`>, ...StringToArr<`${B}`>] extends any[] 
// ? `${[...StringToArr<`${A}`>, ...StringToArr<`${B}`>]['length']}` : nev

// 方法二：逐位相加
type StringToArr<S extends string> = S extends `${infer F}${infer R}` ? [F, ...StringToArr<R>] : []
type ArrToString<A extends any[]> = A extends [infer F extends Num, ...infer R] ? `${F}${ArrToString<R>}` : ''
// 返回一位或者两位的元组，如果是两位，则第一位是进位
type AddTwoNum<A extends Num, B extends Num, Carry extends Num> = [...GetArr<A>, ...GetArr<B>, ...GetArr<Carry>] extends any[]
  ? StringToArr<`${[...GetArr<A>, ...GetArr<B>, ...GetArr<Carry>]['length']}`>
  : ['0']

type AddTwoArr<A extends Num[], B extends Num[], Res extends Num[] = [], Carry extends Num = '0'> =
  A extends [...infer Fa extends Num[], infer La extends Num]
  ? (
    B extends [...infer Fb extends Num[], infer Lb extends Num] // 从两个数组的最后一位开始相加
    ? (
      AddTwoNum<La, Lb, Carry> extends [infer Fc extends Num, infer Lc extends Num, ...infer Rest] // 有进位则进位
      ? AddTwoArr<Fa, Fb, [Lc, ...Res], Fc>
      : AddTwoNum<La, Lb, Carry> extends [infer Fc extends Num, ...infer Rest]
      ? AddTwoArr<Fa, Fb, [Fc, ...Res], '0'> : []
    )
    : (
      // 数组B为空，A存在
      AddTwoNum<La, '0', Carry> extends [infer Fc extends Num, infer Lc extends Num, ...infer Rest]
      ? AddTwoArr<Fa, [], [Lc, ...Res], Fc>
      : AddTwoNum<La, '0', Carry> extends [infer Fc extends Num, ...infer Rest]
      ? AddTwoArr<Fa, [], [Fc, ...Res], '0'> : []
    )
  )
  : (
    // 数组B存在，A为空
    B extends [...infer Fb extends Num[], infer Lb extends Num]
    ? (
      AddTwoNum<'0', Lb, Carry> extends [infer Fc extends Num, infer Lc extends Num, ...infer Rest]
      ? AddTwoArr<[], Fb, [Lc, ...Res], Fc>
      : AddTwoNum<'0', Lb, Carry> extends [infer Fc extends Num, ...infer Rest]
      ? AddTwoArr<[], Fb, [Fc, ...Res], '0'> : []
    )
    // 两个数组都为空时判断是否还需要进位，否则直接返回结果数组
    : Carry extends '0' ? Res
    : (
      AddTwoNum<'0', '0', Carry> extends [infer Fc extends Num, infer Lc extends Num, ...infer Rest]
      ? AddTwoArr<[], [], [Lc, ...Res], Fc>
      : AddTwoNum<'0', '0', Carry> extends [infer Fc extends Num, ...infer Rest]
      ? AddTwoArr<[], [], [Fc, ...Res], '0'> : []
    )
  )

type Sum<A extends string | number | bigint, B extends string | number | bigint> = ArrToString<AddTwoArr<StringToArr<`${A}`>, StringToArr<`${B}`>>>