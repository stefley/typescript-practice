type Index = ['+', number] | ['-', number]

type FormatIndex<T extends number> = `${T}` extends `-${infer R extends number}` ? ['-', R] : ['+', T]

type NumberToTuple<T extends number, Result extends 0[] = []> = Result['length'] extends T
    ? Result : NumberToTuple<T, [0, ...Result]>

type MinusOne<T extends number, Result extends 0[] = NumberToTuple<T>> = Result extends [infer F, ...infer R] ? R['length'] : 0

type Minus<L extends number, M extends number> = L extends M ? 0 : M extends 0 ? L : Minus<MinusOne<L>, MinusOne<M>>

type CorrectIndex<T extends number, L extends number  =0, I extends Index = FormatIndex<T>> = I[0] extends '+' ? I[1] : Minus<L, I[1]>

type GT<T extends number, D extends number, E extends boolean = T extends D ? true : false> = E extends true ? false : T extends D
    ? true
    : T extends 0 
      ? false
      : GT<MinusOne<T>, D, false>
type Slice<
  Arr extends unknown[],
  Start extends number = 0,
  End extends number = Arr['length'],
  CorrectStart extends number = CorrectIndex<Start, Arr['length']>,
  CorrectEnd extends number = CorrectIndex<End, Arr['length']>,
  Result extends unknown[] = []
> = GT<CorrectStart, Arr['length']> extends true
    ? []
    : CorrectEnd extends 0
        ? Result
        : CorrectStart extends 0
            ?Arr extends [infer F, ...infer R]
                ? Slice<R, never, never, MinusOne<CorrectStart>, MinusOne<CorrectEnd>, [...Result, F]>
                : Result
            : Arr extends [infer F, ...infer R]
                ? Slice<R, never, never, MinusOne<CorrectStart>, MinusOne<CorrectEnd>, Result>
                :never