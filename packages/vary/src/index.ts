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

/**
* @description CamelCase duang_duang_duang => duangDuangDuang
*/
type CamelCase<Str extends string> = Str extends `${infer left}_${infer right}${infer rest}` ? `${left}${Uppercase<right>}${CamelCase<rest>}` : Str
type CamelCaseReuslt = CamelCase<'duang_duang_duang'>
type UppercaseResult = Uppercase<'tianwen'>

/**
* @description DropSubStr 删除子串
*/
type DropSubStr<Str extends string, SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}` ? DropSubStr<`${Prefix}${Suffix}`,SubStr> : Str
type DropSubStrReuslt = DropSubStr<'duang_duang_duang','_'>


console.log('vary tsnd working')