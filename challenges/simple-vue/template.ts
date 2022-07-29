// type ComputedValues<C> = {
//     [K in keyof C]: C[K] extends (...args: unknown[]) => infer R ? R : never
// }

// declare function SimpleVue<D,C,M>(options: {
//     data: (this: {}) => D,
//     computed: C & ThisType<D>,
//     methods: M & ThisType<D & M & ComputedValues<C>> 
// }): any

// type Computed<T> = {
//   [key in keyof T]: T[key] extends (...args: any) => any
//     ? ReturnType<T[key]>
//     : T[key];
// };

// declare function SimpleVue<D, C, M>(
//   options: {
//     data: () => D;
//     computed?: C & ThisType<D>;
//     methods?: M & ThisType<D & Computed<C> & M>;
//   } & ThisType<null>
// ): any;

// type Computed<T> = {
//   [P in keyof T]: T[P] extends () => infer V ? V : never
// }
// type Options<D, C, M> = {
//   data: (this: {}) => D,
//   computed: ThisType<D & Computed<C> & M> & C,
//   methods: ThisType<D & Computed<C> & M> & M
// }

// declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any

type GetComputed<T> = {
  [P in keyof T]:T[P] extends (...args:any[])=>any ? ReturnType<T[P]> : never;
}

type Extractor<D,C,M> = {
  data():D;
  computed:C & ThisType<D & C>;
  methods:M & ThisType<D & M & GetComputed<C>>;
} & ThisType<C>;
declare function SimpleVue<D,C,M>(options: Extractor<D,C,M>): any