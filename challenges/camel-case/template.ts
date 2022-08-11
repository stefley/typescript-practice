type CamelCase<S extends string, R extends string = ''> = S extends `${infer A}_${infer B}${infer C}`
  ? CamelCase<C,`${R}${Lowercase<A>}${Uppercase<B>}`> : `${R}${Lowercase<S>}`