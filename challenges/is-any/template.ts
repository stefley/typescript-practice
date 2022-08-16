/*
你要知道：any类型和任意类型都是any类型
type IsAny<T> = unknown extends T ? (((a:1) => void) extends ((a: T) => void) ? true : false) : false

type IsAny<T> = unknown extends T ? [T] extends [1] ? true : false : false

type IsAny<T> = 0 extends (1 & T) ? true : false

type IsAny<T> = 1 extends T & 0 ? true : false
 */
type IsAny<T> = number extends T & string ? true : false