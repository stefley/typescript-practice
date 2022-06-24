type Reverse<T extends any[]> = T extends [...infer R, infer L] ? [L,...Reverse<R>] : []

