type Split<S extends string, SEP extends string, ANSWER extends string[] = []> = string extends S ? string[]
    : S extends SEP ? ANSWER : S extends `${infer HEAD}${SEP}${infer TAIL}` ? Split<TAIL, SEP, [...ANSWER, HEAD]> : [...ANSWER, S]

// type Split<S extends string, SEP extends string> =
// S extends `${infer K}${SEP}${infer R}`
//   ? [K, ...Split<R, SEP>]
//   : S extends `${infer K}`
//     ? SEP extends ''
//       ? []
//       : [K]
//   : string[]
    