// 4 -> [any, any, any, any]
// type LengthToArray<N extends string,T extends any[]=[]> = `${T['length']}` extends N ? T : LengthToArray<N, [any, ...T]>

type MinusOne<T extends number, Result extends number[]= []> = T extends Result['length']
 ? Result extends [infer _,...infer R]
  ? R['length']
  : 0
: MinusOne<T, [...Result, T]>