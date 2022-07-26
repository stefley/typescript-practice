type BuildArr<
  L extends number,
  Arr extends unknown[] = [],
> = Arr['length'] extends L ? Arr : BuildArr<L, [...Arr, never]>

type NumberRange<
  L extends number,
  H extends number,
  R extends unknown[] = BuildArr<L>,
> = R['length'] extends H
  ? [...R, R['length']][number]
  : NumberRange<L, H, [...R, R['length']]>