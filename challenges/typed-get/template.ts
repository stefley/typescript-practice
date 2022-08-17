type Get<T, K extends string> = K extends `${infer F}.${infer Rest}`
    ? Get<T[F & keyof T], Rest> : T[K & keyof T]