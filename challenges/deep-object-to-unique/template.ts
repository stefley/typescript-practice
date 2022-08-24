// type DeepObjectToUniq<O extends object> = {
//   [K in keyof O]: O[K] extends object
//     ? DeepObjectToUniq<O[K] & { _?: [O, K] }>
//     : O[K];
// };

type DeepObjectToUniq<O extends object,
  Path extends Array<keyof any | object> = [O],
  UniqueO = O & { readonly [Tag]?: Path }> =
  {
    [K in keyof UniqueO]: UniqueO[K] extends object ? (
      DeepObjectToUniq<UniqueO[K], [...Path, K]>
    ) : UniqueO[K]
  }

declare const Tag: unique symbol