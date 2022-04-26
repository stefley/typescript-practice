type Diff<O, O1> = {
    [Key in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: Key extends keyof O ? O[Key] : Key extends keyof O1 ? O1[Key] : never
}

// type Exclude<T,U> = T extends U ? never : T;