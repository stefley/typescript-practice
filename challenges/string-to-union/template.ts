// type StringToUnion<T extends string> = T extends ''
//     ? never
//     : T extends `${infer F}${infer R}`
//         ? `${F}` | StringToUnion<R>
//         : T
    
type StringToUnion<T extends string> = T extends `${infer L}${infer R}` ? L | StringToUnion<R> : never