type PrintMap = {
    s: string;
    d: number;
}
type Format<T extends string> = T extends `${string}%${infer A}${infer B}`
    ? A extends keyof PrintMap
     ? (a: PrintMap[A]) => Format<B>
     : Format<B>
    : string
