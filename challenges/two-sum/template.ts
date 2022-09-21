type LengthArray<T extends number, A extends any[] = []> = A['length'] extends T ? A : LengthArray<T, [...A, 0]>
type TwoSum<T extends number[], U extends number> = T extends [infer F extends number, ...infer Rest extends number[]]
    ? LengthArray<U> extends [...LengthArray<F>, ...infer R]
        ? R['length'] extends Rest[number]
         ? true
         : TwoSum<Rest, U>
        : false
    : false

// type Rang<A extends number, Res extends any[] = []> = 
//   Res['length'] extends A 
//     ? Res
//     : Rang<A, [...Res, 1]>
// type Shift<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : []
// type Substract<L extends any[], R extends 1[], Res extends any[] = []> =
//   L['length'] extends R['length']
//     ? Res['length']
//     : Substract<Shift<L>, R, [...Res, 1]>
// type Gt<A extends number, B extends number, L extends any[] = Rang<A>, R extends any[] = Rang<B>> =
//   L['length'] extends 0
//     ? false
//     : R['length'] extends 0
//       ? true
//       : Gt<A, B, Shift<L>, Shift<R>>
// type Sub<A extends number, B extends number, L extends any[] = Rang<A>, R extends any[] = Rang<B>> = 
//   Gt<A, B> extends true
//     ? Substract<L, R>
//     : -1
// type Include<T extends number[], U extends number> = T extends [infer F, ...infer Rest extends number[]]
//   ? F extends U
//     ? true
//     : Include<Rest, U>
//   : false
// type TwoSum<T extends number[], U extends number> =
//   T extends [infer F extends number, ...infer Rest extends number[]]
//     ? Sub<U, F> extends -1 // U <= F
//       ? TwoSum<Rest, U>
//       : Include<Rest, Sub<U, F>> extends true // F+X == U
//         ? true
//         : TwoSum<Rest, U>
//     : false