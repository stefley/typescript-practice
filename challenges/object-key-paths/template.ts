// interface SomeObject {
//   [key: string]: unknown;
// }

// type SomeArray = unknown[];

// type PathString<Path extends string | number> = Path extends number
//   ? Path | `[${Path}]`
//   : Path;

// type SegmentPath<
//   Path extends string | number,
//   BasePath extends string = ""
// > = BasePath extends ""
//   ? PathString<Path>
//   : Path extends number
//   ? `${BasePath}.${PathString<Path>}` | `${BasePath}${PathString<Path>}`
//   : `${BasePath}.${PathString<Path>}`;

// type ArrayKeyPaths<
//   Model extends unknown[],
//   BasePath extends string = ""
// > = Model extends []
//   ? never
//   :
//       | SegmentPath<number, BasePath>
//       | (Model[number] extends SomeObject
//           ? ObjectKeyPaths<Model[number], SegmentPath<number, BasePath>>
//           : never)
//       | (Model[number] extends SomeArray
//           ? ArrayKeyPaths<Model[number], SegmentPath<number, BasePath>>
//           : never);

// type ObjectKeyPaths<
//   Model extends SomeObject,
//   BasePath extends string = "",
//   Keys extends keyof Model = keyof Model
// > = Keys extends string | number
//   ?
//       | SegmentPath<Keys, BasePath>
//       | (Model[Keys] extends SomeObject
//           ? ObjectKeyPaths<Model[Keys], SegmentPath<Keys, BasePath>>
//           : never)
//       | (Model[Keys] extends SomeArray
//           ? ArrayKeyPaths<Model[Keys], SegmentPath<Keys, BasePath>>
//           : never)
//   : never;


type ObjectKeyPaths<T extends object, Res extends string = '', K extends keyof T = keyof T>
  =
  (K extends K ?
    T[K] extends Record<keyof any, any> ?
    (Res extends '' ? K : K extends number ? `${Res}.${K}` | `${Res}.[${K}]` | `${Res}[${K}]`
      : `${Res}.${K & (string)}`) | ObjectKeyPaths<T[K], Res extends '' ? `${K & (string | number)}` : K extends number ? `${Res}.${K}` | `${Res}.[${K}]` | `${Res}[${K}]` : `${Res}.${K & (string)}`> : Res extends '' ? K : K extends number ? `${Res}.${K}` | `${Res}.[${K}]` | `${Res}[${K}]` : `${Res}.${K & (string)}`
    : never)