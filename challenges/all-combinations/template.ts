// 将字符串中的每个值使用 | 组合成联合类型
type String2Union<S extends string> =
  S extends `${infer C}${infer R}`
  ? C | String2Union<R>
  : never;

type AllCombinations<
  S extends string,
  U extends string = String2Union<S>,
  > = [U] extends [never]
  ? ''
  : '' | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];