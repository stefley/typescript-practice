type LengthOfString<S extends string, LenArr extends unknown[] = []> = S extends `${infer F}${infer R}`
    ? LengthOfString<R, [F,...LenArr]>
    : LenArr['length'] 