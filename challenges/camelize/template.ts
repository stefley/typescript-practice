// type CamelizeString<T extends keyof any> = T extends string 
//   ? Uncapitalize< 
//       T extends `${infer Left}_${infer Right}` 
//         ? `${Capitalize<Left>}${Capitalize<CamelizeString<Right>>}` 
//         : `${Capitalize<T>}` 
//     > 
//   : T; 
// type Camelize<T extends object | object[]> = T extends object[] 
//   ? Camelize<T[number]>[] 
//   : { 
//       [key in keyof T as CamelizeString<key>]: 
//           T[key] extends object ? Camelize<T[key]> : T[key]; 
//     }; 

// type CamelCase2<S> = S extends string
//     ? S extends `${infer L}_${infer K}${infer R}`
//         ? `${Lowercase<L>}${Uppercase<K>}${CamelCase2<R>}`
//         : Lowercase<S>
//     : S

// type CamelizeArray<T, U extends any[] = []> = T extends [infer K, ...infer R]
//     ? keyof K extends never
//         ? CamelizeArray<R, [...U, K]>
//         : CamelizeArray<R, [...U, Camelize<K>]>
//     : U

// type CamelizeType<T> = T extends any[]
//     ? CamelizeArray<T>
//     : keyof T extends never
//     ? T
//     : Camelize<T>

// type Camelize<T> = {
//     [K in keyof T as CamelCase2<K>]: CamelizeType<T[K]>
// }


type Camel<T> = T extends `${infer L}_${infer F}${infer O}` ? Camel<`${L}${Uppercase<F>}${O}`> : T;
type Camelize<T> = T extends unknown[] ? {
  [K in keyof T]: T[K] extends object ? Camelize<T[K]> : T[K]; 
} : {
  [K in keyof T as Camel<K>]: T[K] extends object ? Camelize<T[K]> : T[K]; 
}