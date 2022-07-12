type Chunk<T extends any[], Step extends number, L extends any[] = []> = T extends [infer Head, ...infer Rest]
                                                                        ? L['length'] extends Step
                                                                        ? [L, ...Chunk<T, Step, []>]
                                                                        : [...Chunk<Rest, Step, [ ...L,Head]>]
                                                                        : L extends []
                                                                        ? []
                                                                        : [L]