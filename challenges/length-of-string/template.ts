type LengthOfString<S extends string, T extends readonly any[] = []> = S extends `${infer F}${infer R}` 
    ? LengthOfString<R,[...T, F]> // 转化为数组
    : T['length']