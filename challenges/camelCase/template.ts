type CamelCase<S extends string> = 
  S extends "" 
  ? 
  "" 
  :
  S extends `${infer A}${infer B}` 
    ? 
    A extends '-' 
      ?
      B extends `${infer C}${infer D}`
        ?
        C extends Uppercase<C> 
          ?
          `${A}${CamelCase<B>}`
          :
          `${Uppercase<C>}${CamelCase<D>}`
        :
        B extends Uppercase<B>
          ?
          `-${B}`
          :
          `${Uppercase<B>}`
      :
      `${A}${CamelCase<B>}`
    :
    S