type FlattenOnce<T extends any[]> = T extends [infer F, ...infer R] ? [...F extends [...infer K] ? K : [F], ...FlattenOnce<R>] : T
type FlattenDepth<T, Times extends number = 1, P extends any[] = []> = T extends any[] ? P extends { length: Times } ? T : T extends FlattenOnce<T> ? T : FlattenDepth<FlattenOnce<T>, Times, [...P, any]> : never  
