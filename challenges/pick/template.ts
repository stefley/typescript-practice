type MyPick<T, K extends keyof T> = {
    [P in K]: T[P] 
}

/* 
    mapped -> P in K
    indexed -> T[P]
    lookup ->  keyof T
*/