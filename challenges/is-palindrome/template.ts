// type IsPalindrome<T extends string | number> = 
// `${T}` extends `${infer L}${infer Rest}${infer R}`
//   ? `${L}` extends `${R}`
//     ? IsPalindrome<Rest>
//     : false
//   : true


// type StrLength<T extends string | number, L extends any[] = []> =
// `${T}` extends `${infer _}${infer R}` ? StrLength<R, [...L, 0]> : L['length']

// type IsPalindrome<T extends string | number> = StrLength<T> extends 1 | 0
// ? true
// : `${T}` extends `${infer L}${infer Rest}${infer R}`
//   ? `${L}` extends `${R}`
//     ? IsPalindrome<Rest>
//     : false
//   : false

// 倒装 'abc' -> 'cba'
type Palindrome<T extends string> = T extends `${infer K}${infer R}`
    ? `${Palindrome<R>}${K}`
    : T

type IsPalindrome<T extends string | number> = `${T}` extends Palindrome<`${T}`>
    ? true
    : false