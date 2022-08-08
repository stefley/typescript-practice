// type GetRequired<T> = {
//     [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
// }
// type RequiredKeys<T> = keyof GetRequired<T>

// type RequiredKeys<T, K = keyof T> = K extends keyof T
//   ? {} extends Pick<T, K>
//     ? never
//     : K
//   : never

type RequiredKeys<T> = keyof {
    [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K]
}