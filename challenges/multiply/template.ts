type Check<T extends string | number | bigint> = T extends number | bigint
    ? true
    : T extends `${infer L}${infer R}`
        ? L extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
         ? Check<R>
         : false
        : true

type STA<T extends string, RR extends string[] = []> = T extends `${infer L}${infer R}`
    ? STA<R, [...RR,L]>
    : RR

type ASTHelper<T extends unknown[]> = T extends [infer L, ...infer R]
    ? L extends string
     ? `${L}${ASTHelper<R>}`
     : ''
    : ''

type AST<T extends unknown[]> = T extends ['0', ...infer R]
    ? AST<R>
    : T extends []
        ? '0'
        : ASTHelper<T>
    
type PlusOne< A extends string, B extends string, AA extends unknown[] = [], BA extends unknown[] = []> =
    `${AA['length']}` extends A
        ? `${BA['length']}` extends B
            ? `${[...AA, ...BA]['length'] & number}`
            : PlusOne<A, B, AA, [...BA, unknown]>
        : PlusOne<A, B, [...AA, unknown], BA>

type PlusHelper<A, B, F extends boolean = false> = PlusOne<A extends string ? A : '0', PlusOne<B extends string ? B : '0', F extends true ? '1' : '0'>> extends `${infer _1}${infer _2}`
    ? _2 extends ''
     ? [false, _1]
     : [true, _2]
    : [false, '0']


type Plus<
  A extends unknown[] = [],
  B extends unknown[] = [],
  R extends string[] = [],
  F extends boolean = false,
> = A extends [...infer LA, infer RA]
  ? B extends [...infer LB, infer RB]
    ? Plus<LA, LB, [PlusHelper<RA, RB, F>[1], ...R], PlusHelper<RA, RB, F>[0]>
    : F extends true
    ? Plus<LA, [], [PlusHelper<RA, '1', false>[1], ...R], PlusHelper<RA, '1', false>[0]>
    : [...A, ...R]
  : B extends [...infer LB, infer RB]
  ? F extends true
    ? Plus<[], LB, [PlusHelper<'1', RB, false>[1], ...R], PlusHelper<'1', RB, false>[0]>
    : [...B, ...R]
  : F extends true
  ? ['1', ...R]
  : R

type HelperOne<
    A extends string[],
    B extends string,
    H extends unknown[] = [],
    R extends string[] = ['0']
> = `${H['length']}` extends B ? R : HelperOne<A, B, [...H, unknown], Plus<A, R>>

type Helper<
    A extends string[],
    B extends string,
    RR extends string[] = [],
> = B extends `${infer L}${infer R}` ? Helper<A, R, Plus<[...RR, '0'], HelperOne<A, L>>> : RR


type Multiply<
    A extends string | number | bigint,
    B extends string | number | bigint
> = Check<A> extends true ? Check<B> extends true
    ? AST<Helper<STA<`${A}`>, `${B}`>>
    : never
 : never