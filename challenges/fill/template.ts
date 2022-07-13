

type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    L extends 1[] = [],
    IsReplace extends boolean = false
> = Start extends End
    ? T
    : T extends [infer Head, ...infer Rest]
    ? L['length'] extends Start
    ? [N, ...Fill<Rest, N, Start, End, [1, ...L], true>]
    : L['length'] extends End
    ? [Head, ...Fill<Rest, N, Start, End, [1, ...L], false>]
    : [(IsReplace extends true ? N : Head), ...Fill<Rest, N, Start, End, [1, ...L], IsReplace>]
    : []