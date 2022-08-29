// type JoinReturn<D extends string, P extends any[]> = P extends [string, ...infer R]
//   ? `${P[0]}${[] extends R ? '' : D}${JoinReturn<D, R>}`
//   : ''

type JoinReturn<D extends string, P extends any[]> = P extends [infer F extends string, ...infer R]
  ? `${F}${[] extends R ? '' : D}${JoinReturn<D, R>}`
  : ''
declare function join<T extends string>(delimiter: T): <Args extends string[]>(...parts: Args) => JoinReturn<T, Args>