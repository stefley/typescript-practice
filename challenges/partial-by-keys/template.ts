type KV<V> = {
    [P in keyof V]: V[P];
}
type PartialByKeys<T extends object, K = keyof T> = KV<{
    [Key in keyof T as Key extends K ? Key : never]?: T[Key];
} & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
}> 
