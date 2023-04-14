/**
 * @description ts 实现 Array.prototype.push
 */
type PushArray<Arr extends unknown[], Ele> = [...Arr,Ele] 
type PushResult = PushArray<[1,2],6>

/**
 * @description ts 实现 Zip 输入:[1,2,3] ['a',b','c'] 输出:[[1,'a'],[2,'b'],[3,'c']]
 */

type Zip<One extends unknown[],Other extends unknown[]> = One extends [infer OneFirst,...infer OneRest] ? 
| Other extends [infer OtherFirst,...infer OtherRest] ? 
| [[OneFirst,OtherFirst],...Zip<OneRest,OtherRest>] : 
| [] :
| []
type ZipResult = Zip<[1,2,3,4],['a','b','c','m']>



console.log('vary tsnd working')