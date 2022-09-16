type Intersection<T> = T extends [infer F, ...infer R]
 ? (F extends unknown[] ? F[number] : F) & Intersection<R>
 : unknown