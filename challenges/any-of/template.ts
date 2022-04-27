type FalseType = false | '' | [] | { [key: string]: never } | 0
type AnyOf<T extends readonly any[]> =  T extends [infer F, ...infer R]
    ? F extends FalseType
        ? AnyOf<R>
        : true
    : false