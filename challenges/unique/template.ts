// import { Equal } from "@type-challenges/utils";

type Equal<X,Y> = (<T>() => T extends X ? 0 : 1) extends (<T>() => T extends Y ? 0 : 1) ? true : false;

type Includes<TArray, TItem> = TArray extends [infer F, ...infer R] ? Equal<F, TItem> extends true ? true : Includes<R, TItem> : false


type Unique<TArray, TFilter extends Array<unknown> = []> = TArray extends [infer F, ...infer R] ? Includes<TFilter, F> extends true ? Unique<R, TFilter> : Unique<R, [...TFilter, F]> : TFilter