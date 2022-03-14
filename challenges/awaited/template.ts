// type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P : never;  

// 泛型依然是Promise类型递归处理
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? (P extends Promise<any> ? MyAwaited<P> : P) : never;