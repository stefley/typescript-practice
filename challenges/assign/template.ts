// type ObjectIntersection<T extends object, U extends any[]> = U extends [infer R extends object, ...infer U extends object[]]
//     ? ObjectIntersection<{[J in keyof T | keyof R]: J extends keyof R ? R[J]: J extends keyof T ? T[J] : never}, U>
//     : T

// type Merge<T extends object> = {[J in keyof T]: T[J]}
// type Assign<T extends Record<string, unknown>, U extends any[]> = Merge<ObjectIntersection<T, U>>

type Merge<F, S> = {
    [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}

type Assign<T extends Record<string, unknown>, U> = U extends [infer K, ...infer R]
    ? K extends Record<string, unknown>
        ? Assign<Merge<T, K>, R>
        : Assign<T, R>
    : T