type ObjectFromEntries<T extends [string, unknown]> = {
  [K in T['0']]: T extends [K, infer Value] ? Value : never
}