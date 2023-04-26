
/**
* @description any类型与任何类型的交叉都是any
*/
type IsAny<T> = 6 extends (6 & T) ? true : false
type IsAnyResult = IsAny<any>

/**
* @description 如果条件类型左边是类型参数，并且传入never 那么直接返回never
*/
type Never<T> = T extends number ? true : false
type NeverResult = Never<never>

type IsNever<T> = [T] extends [never] ? true : false
type IsNeverResult = IsNever<never>

/**
* @description 元组类型 length 是数字字面量,数组 length 是 number
*/
type NotEqual<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? false : true
type IsTuple<T> = T extends [...params: infer Eles] ? NotEqual<Eles['length'],number> : false
type IsTupleResult = IsTuple<unknown[]>

/**
* @description 允许父类型赋值给子类型，就叫做逆变；允许子类型赋值给父类型，就叫做协变；函数参数是有逆变的性质，也就是如果参数可能是多个类型，参数类型会变成它们的交叉类型。
*/
type UnionToIntersection<T> = (T extends T ? (param: T) => unknown : never) extends (params: infer R) => unknown ? R : never

type UnionToIntersectionResult = UnionToIntersection<{a: 1} | {b:2}>

/**
 * @description 可选索引的特性：可选索引的值为 undefined 和值类型的联合类型
 */
type PickResult = Pick<{a?:1,b:6},'a'>
type GetOptional<T extends Record<string,any>> = {
  [Key in keyof T as ({} extends Pick<T,Key> ? Key : never)] : T[Key]
}
type GetOptionalResult = GetOptional<{a?:1,b:6}>

type RequiredKey<Key extends keyof T ,T> = {} extends Pick<T,Key> ? never : Key
type GetRequired<T extends Record<string,any>> = {
  [key in keyof T as RequiredKey<key,T>]: T[key]
}
type GetRequiredResult = GetRequired<{a:1,b?:2}>

type isObj<T extends Record<string,any>> = {} extends T ? true : false
type isObjResult = isObj<{}>


console.log('special tsnd working')