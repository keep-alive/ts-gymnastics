/**
* @description Parameters 用于提取函数类型的参数类型
*/
type ParametersResult = Parameters<(name: string, age: number) => {}>

/**
* @description ReturnType 用于提取函数类型的返回值类型
*/
type ReturnTypeResult = ReturnType<(name: string, age: number) => Record<string, any>>

/**
* @description ConstructorParameters 用于提取构造器参数类型
*/
class Person {}
interface PersonConstructor {
  new (name: string): Person
}
type ConstructorParametersResult = ConstructorParameters<PersonConstructor>

/**
* @description InstanceType 用于提取构造器返回值类型
*/
type InstanceTypeResult = InstanceType<PersonConstructor>

/**
* @description Partial 把索引类型的索引变为可选
*/
type PartialResult = Partial<{name: 'Ween'}>

/**
* @description Required 把索引类型的可选索引变为必选
*/
type RequiredResult = Required<{name?: 'Ween'}>

/**
* @description Readonly 把索引类型索引添加 readonly 
*/
type ReadonlyResult = Readonly<{name: 'Ween'}>

/**
* @description Pick 对索引类型 索引和值进行筛选或者过滤构造新的索引类型
*/
type PickResult = Pick<{name: 'Ween', age: 18}, 'name'>

/**
* @description Exclude 从联合类型中去掉一部分类型
*/
type ExcludeResult = Exclude<'a'|'b'|'d', 'b'|'c'>

/**
* @description Extract 取交集
*/
type ExtractResult = Extract<'a'|'b'|'c', 'a'|'b'>

/**
* @description Omit 索引类型删除一部分索引 构造新的索引 (Pick互补)
*/
type OmitResult = Omit<{name: 'Ween', age: 18}, 'name'>

/**
* @description NonNullable 用于判断不是null和undefined类型
*/

type NonNullableResult = NonNullable<undefined>