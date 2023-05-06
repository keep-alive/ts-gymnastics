/**
* @description Chunk(对数组做分组，比如 1、2、3、4、5 的数组，每两个为 1 组，那就可以分为 1、2 和 3、4 以及 5 这三个 Chunk)
*/
type Chunk<Arr extends unknown[], Lenth extends number, Item extends unknown[] = [], Res extends unknown[] = []> = 
| Arr extends [infer First, ...infer Rest] ?
| Item['length'] extends Lenth ?
| Chunk<Rest, Lenth, [First], [...Res,Item]> : 
| Chunk<Rest, Lenth,[...Item,First],Res> : [...Res,Item]

type ChunkResult = Chunk<[1,2,3,4,5],2>


console.log('example tsnd working')