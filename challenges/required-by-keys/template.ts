// your answers
type Copy<T> = Pick<T, keyof T>;
// type RequiredByKeys<T extends object, K = keyof T> = Copy<
//   Required<Pick<T, Extract<keyof T, K>>> & Pick<T, Exclude<keyof T, K>>
// >;

// type RequiredByKeys1<T extends object, K extends keyof any = keyof T> = Copy<
//   Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>
// >;

type RequiredByKeys<T extends object, K = keyof T> = Copy<
    Required<Pick<T, Extract<keyof T, K>>> & Pick<T, Exclude<keyof T, K>>
>