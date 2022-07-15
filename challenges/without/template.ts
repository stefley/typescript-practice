type Without<T extends unknown[], U, Res extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends (U extends unknown[] ? U[number] : U)
    ? Without<Rest, U, Res>
    : Without<Rest, U, [...Res, First]>
  : Res;