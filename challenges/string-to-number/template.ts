type ToNumber<
  S extends string,
  Arr extends unknown[] = []
> = S extends `${number}`
  ? S extends `${Arr["length"]}`
    ? Arr["length"]
    : ToNumber<S, [...Arr, unknown]>
  : never;
