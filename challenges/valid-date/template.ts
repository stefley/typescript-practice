type D30 = `${ 0 | 1 | 2 }${ 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 }` | '20' | '30'
type D31 = D30 | '31'
type D28 = Exclude<D30, '29' | '30'>

type ValidDate<T extends string> =
  T extends `${'01' | '03' | '05' | '07' | '08' | '10' | '12'}${infer Date}`
    ? Date extends D31 ? true : false
    : T extends `${'04' | '06' | '09' | '11'}${infer Date}`
      ? Date extends D30 ? true : false
      : T extends `02${infer Date}`
        ? Date extends D28 ? true : false
        : false