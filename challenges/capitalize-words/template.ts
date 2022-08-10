type Str2Union<T extends string, R extends string[] = []> = T extends `${infer F}${infer Rest extends string}` ? Str2Union<Rest, [...R, F]> : R[number];

type L = Str2Union<'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'>;

type CapitalizeWords<S extends string, R extends string = '', Caped extends boolean = false> = 
    S extends `${infer F}${infer Rest}` ?
     F extends L ?
      CapitalizeWords<Rest, `${R}${Caped extends true ? F : Uppercase<F>}`, true>
        : CapitalizeWords<Rest,`${R}${F}`, false>
    : R