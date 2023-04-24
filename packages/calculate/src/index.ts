import { type } from "os"

type BuildArr<Length extends number, Ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArr<Length,Ele,[...Arr,Ele]>

/**
* @description ts 实现加法
*/
type Add<Num1 extends number, Num2 extends number> = [...BuildArr<Num1>,...BuildArr<Num2>]['length']
type AddResult = Add<10,20>

/**
* @description ts实现减法
*/
type SubStract<Num1 extends number, Num2 extends number> =
| BuildArr<Num1> extends [...BuildArr<Num2>,...infer Rest] ? Rest['length'] : never
type SubStractResult = SubStract<10,7>

/**
* @description ts 实现乘法
*/
type Multiply<Num1 extends number, Num2 extends number, Arr extends unknown[] = []> = 
| Num2 extends 0 ? Arr['length'] : Multiply<Num1,SubStract<Num2,1>,[...BuildArr<Num1>,...Arr]>

type MultiplayResult = Multiply<20,8>

/**
* @description ts 实现除法
*/
type Divide<Num1 extends number, Num2 extends number, Arr extends unknown[] = []> = 
| Num1 extends 0 ? Arr['length'] : Divide<SubStract<Num1,Num2>, Num2, [unknown,...Arr]>

type DivideResult = Divide<15,5>

/**
* @description 字符串长度 tip: 字符串类型没有length
*/
type StrLength<Str extends string, Arr extends unknown[] = []> = 
| Str extends `${string}${infer Rest}` ? StrLength<Rest,[unknown, ...Arr]> : Arr['length']

type StrLengthResult = StrLength<'zhangtianwen'>

console.log('calculate tsnd working')