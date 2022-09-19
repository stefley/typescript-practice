type BinaryToDecimal<
    T extends string,
    U extends any[] = []
> = T extends `${infer K}${infer R}`
    ? K extends '1'
        ? BinaryToDecimal<R, [...U, ...U, unknown]>
        : BinaryToDecimal<R, [...U, ...U]>
    : U['length']