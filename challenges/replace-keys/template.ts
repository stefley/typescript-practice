type ReplaceKeys<U extends object, T extends string, Y extends Record<string, any>> = {
    [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K]
}