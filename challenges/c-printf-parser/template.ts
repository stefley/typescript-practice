type ControlsMap = {
    c: 'char'
    s: 'string'
    d: 'dec'
    o: 'oct'
    h: 'hex'
    f: 'float'
    p: 'pointer'
}

type ParsePrintFormat<S extends string, U extends any[] = []> = S extends `${infer A}%${infer B}${infer C}`
    ? B extends keyof ControlsMap
        ? ParsePrintFormat<C, [...U, ControlsMap[B]]>
        : ParsePrintFormat<C, U>
    : U