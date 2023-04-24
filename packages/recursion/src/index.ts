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

/**
* @description 递归实现删除数组元素
*/
type RemoveEle<Arr extends unknown[], Ele, Result extends unknown[] = []> = 
| Arr extends [infer First, ... infer Rest] ?
| isEqual<First, Ele> extends true ? 
| RemoveEle<Rest, Ele, Result> : RemoveEle<Rest, Ele, [...Result,First]> : Result

type RemoveEleResult = RemoveEle<[1,2,3,6,8,9],8>

/**
* @description 递归使用元素构造数组
*/
type BuildArr<Length extends number, Ele = unknown, Arr extends unknown[] = []> = 
| Arr['length'] extends Length ? Arr : BuildArr<Length, Ele, [...Arr, Ele]>
type BuildArrResult = BuildArr<10,'hehe'>

/**
* @description 递归实现字符串元素替换
*/
type ReplaceAll<Str extends string, From extends string, To extends string> =
| Str extends `${infer Left}${From}${infer Rest}` ? 
| `${Left}${To}${ReplaceAll<Rest,From,To>}` : Str

type ReplaceAllResult = ReplaceAll<'doing doing','ing','ne'>

/**
* @description 字符串类型字符提取转换成联合类型
*/
type StringToUnion<Str extends string> = Str extends `${infer Left}${infer Rest}` ? Left | StringToUnion<Rest> : never
type StringToUnionResult = StringToUnion<'hehei'>

/**
* @description 字符串反转
*/
type ReverseStr<Str extends string, Result extends string = ''> = 
| Str extends `${infer First}${infer Rest}` ? ReverseStr<Rest,`${First}${Result}`> : Result
type ReverseStrResult = ReverseStr<'hello'>

/**
* @description 通过递归给索引类型索引添加修饰符
*/
type person = {
  age: 30,
  name: 'Ween',
  other: {
    do: () => string,
    info: '1992'
  }
}
type DeepReadonly<Obj extends Record<string,any>> = Obj extends unknown ? {
  readonly [key in keyof Obj] : Obj[key] extends object ? Obj[key] extends Function ? Obj[key] : DeepReadonly<Obj[key]> : Obj[key]
} : never

type DeepReadonlyResult = DeepReadonly<person>

console.log('recursion tsnd working')