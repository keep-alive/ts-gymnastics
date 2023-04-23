/**
* @description 递归提取不确定层数的 Promise 中的 value 类型的高级类型。
*/
type GetPromiseValueType<P extends Promise<unknown>> = P extends Promise<infer ValueType> ? 
| ValueType extends Promise<unknown> ? GetPromiseValueType<ValueType> : ValueType : never

type ValueType = GetPromiseValueType<Promise<Promise<Record<string,any>>>>

/**
* @description 递归实现ReverseArr
*/
type ReverseArr<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest] ? 
| [...ReverseArr<Rest>,First] : Arr
type ReverseArrResult = ReverseArr<[1,2,3,6,7,8,9]>

/**
* @description 递归实现includes
*/
type isEqual<A,B> = (A extends B ? true : false) & (B extends A ? true : false)
type Includes<Arr extends unknown[], Ele> = Arr extends [infer First, ...infer Rest] ?
| isEqual<First, Ele> extends true ? true : Includes<Rest, Ele> : false

type IncludesResult = Includes<[1,2,3],20>
console.log('recursion tsnd working')