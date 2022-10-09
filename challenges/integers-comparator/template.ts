enum Comparison {
  Greater,
  Equal,
  Lower,
}

type ParseNegativeNumber<N extends number> = `${N}` extends `-${infer PN}` ? PN : N


type CompareShort<A extends number | string, B extends number | string, Arr extends any[] = []> =
  `${Arr['length']}` extends `${A}`
  ? Comparison.Lower
  : `${Arr['length']}` extends `${B}`
  ? Comparison.Greater
  : CompareShort<A, B, [any, ...Arr]>

type LengthOfString<S extends string, R extends any[] = []> = S extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [...R, First]> : R["length"]

type Compare<A extends number | string, B extends number | string> = LengthOfString<`${A}`> extends LengthOfString<`${B}`> ?
  (
    `${A}` extends `${infer C}${infer RestA}` ? (
      `${B}` extends `${infer D}${infer RestB}` ? (
        C extends D ? Compare<RestA, RestB> : CompareShort<C, D>
      ) : never
    ) : never
  ) : Compare<LengthOfString<`${A}`>, LengthOfString<`${B}`>>

type ComparatorI<A extends number | string, B extends number | string> =
  A extends string
  ? B extends string
  ? Compare<B, A>
  : Comparison.Lower
  : B extends string
  ? Comparison.Greater
  : Compare<A, B>

type Comparator<A extends number, B extends number> =
  A extends B
  ? Comparison.Equal
  : ComparatorI<ParseNegativeNumber<A>, ParseNegativeNumber<B>>;