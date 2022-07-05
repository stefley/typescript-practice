type Fibonacci<T extends number, N1 extends number[] = [], N2 extends number[] = [number], V extends number[] = [number]> = 
  T extends 0 ? never :
    T extends V['length']
      ? N2['length']
      : Fibonacci<T, N2, [...N1, ...N2], [...V, number]>