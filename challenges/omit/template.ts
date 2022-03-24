type MyOmit<T, K> = {
    [Key in keyof T as (Key extends K ? never : Key)]: T[Key]
}

// Related knowledge point
// In TypeScript4.1 and onwards,you can re-map keys in mapped types with an as clause in a mapped type:

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
}