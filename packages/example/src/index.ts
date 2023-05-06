/**
* @description Chunk(对数组做分组，比如 1、2、3、4、5 的数组，每两个为 1 组，那就可以分为 1、2 和 3、4 以及 5 这三个 Chunk)
*/
type Chunk<Arr extends unknown[], Lenth extends number, Item extends unknown[] = [], Res extends unknown[] = []> = 
| Arr extends [infer First, ...infer Rest] ?
| Item['length'] extends Lenth ?
| Chunk<Rest, Lenth, [First], [...Res,Item]> : 
| Chunk<Rest, Lenth,[...Item,First],Res> : [...Res,Item]

type ChunkResult = Chunk<[1,2,3,4,5],2>

/**
* @description UnionToTuple(联合类型转元组，比如 'a'|'b'|'c' => ['a','b','c'])
*/
type UnionToIntersection<U> = (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown ?
| R : never
type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ?
| [...UnionToTuple<Exclude<T, R>>, R] : []
type UnionToTupleResult = UnionToTuple<'a' | 'b' | 'c'>



console.log('example tsnd working')