type Enum<T extends readonly string[], N extends boolean = false, R extends object = {}> = 
    T extends readonly[...infer Rest extends string[], infer Last extends string]
     ? Enum<Rest, N, {readonly [key in keyof R | Last as key extends keyof R ? key : Capitalize<Last>]: key extends keyof R ? R[key] : N extends false ? Last : Rest['length']}>
     : R
    

// type Find<T extends readonly string[], S extends T[number], I extends Array<number> = []> = T extends readonly [infer F, ...infer R] 
//   ? F extends S  
//     ? I["length"]
//     : R extends Array<string>
//       ? Find<R, S, [...I, 0]>
//       : never
//   : never;

// type PascalCase<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : never
// type Enum<T extends readonly string[], N extends boolean = false> = {
//   readonly [Key in T[number] as PascalCase<Key>]: T[number] extends infer L 
//     ? L extends Key 
//       ? N extends true ? Find<T, Key>: Key
//       : never
//     : never
// };