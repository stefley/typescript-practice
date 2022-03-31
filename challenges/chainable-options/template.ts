// type Chainable = {
//     option<ThisArg, K extends string, V>(this: ThisArg, key: Exclude<K, keyof ThisArg>, value: V): ThisArg & { [Key in K]: V};
//     get<ThisArg>(this: ThisArg): Omit<ThisArg, 'option' | 'get'>;
// }

type Chainable<T = {}> = {
    option<K extends string, V = unknown>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K,V>>;
    get(): T;
}