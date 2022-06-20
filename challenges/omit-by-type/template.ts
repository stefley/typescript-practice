type OmitByType<T extends object, U> = {
    [key in keyof T as T[key] extends U ? never : key]: T[key];
}