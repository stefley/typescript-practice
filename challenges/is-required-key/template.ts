type IsRequiredKey<T, K extends keyof T> = T extends {
    [P in K]-?: T[P]
} ? true : false

// type IsRequiredKey<T, K extends keyof T> = (
//   K extends keyof T ? ({} extends Pick<T, K> ? 1 : 0) : never
// ) extends 0
//   ? true
//   : false

// type IsRequiredKey<T, K extends keyof T> = undefined extends T[K]
//   ? false
//   : true

// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };