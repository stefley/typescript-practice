type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type IndexOf<T extends unknown[], U, I extends unknown[] = []> = T extends [infer F, ...infer R] ? Equal<F, U> extends true ? I['length'] : IndexOf<R, U, [...I, F]> : -1