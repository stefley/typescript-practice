type Length<T extends readonly any[]> = T['length']
// type Length<T extends {length: number}> = T['length']