type PickByType<T, U> = {
    [Key in keyof T as U extends T[Key] ? Key : never]: U;
}