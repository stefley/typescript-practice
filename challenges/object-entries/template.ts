// your answers
type ObjectEntries<T, K extends keyof T = keyof T> = K extends keyof T ? [K, T[K] extends undefined ? undefined : Exclude<T[K], undefined>] : never 
