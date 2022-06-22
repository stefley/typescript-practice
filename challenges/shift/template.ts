// type Shift<T extends any[]> = T extends [infer _, ...infer R] ? R : []
type Shift<T extends any[]> = T extends [unknown, ...infer R] ? R : never;