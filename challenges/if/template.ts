// type If<C extends boolean, T, F> = C extends true ? T : F

type If<c extends boolean, T, F> = c extends null ? TypeError : (c extends true ? T : F);