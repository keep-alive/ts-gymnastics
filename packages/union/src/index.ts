
/**
* @description 分布式条件类型
*/
type Union = 'a' | 'b' | 'c'
type UppercaseA<union extends string> = union extends 'a' ? Uppercase<union> : union 
type UppercaseAResult = UppercaseA<Union>
type UnionStr = `${Union}~`

/**
* @description CamelcaseUnion
*/
type CamelcaseUnion<union extends string> = 
| union extends `${infer Left}_${infer Right}${infer Rest}` ? 
| `${Left}${Uppercase<Right>}${CamelcaseUnion<Rest>}` : union

type CamelcaseUnionResult = CamelcaseUnion<'aa_bb' | 'cc_dd'>

/**
* @description 判断联合类型 IsUnion
*/
type IsUnion<A,B=A> = A extends A ? [B] extends [A] ? false : true : never
type IsUnionResult = IsUnion<'a' | 'b'>

/**
* @description BEM bem 是 css 命名规范，block__element--modifier
*/

type BEM<Block extends string, Ele extends string[], Modifier extends string[]> = `${Block}_${Ele[number]}--${Modifier[number]}`

type BEMS = BEM<'block',['button','input'],['able','disabled']>


console.log('union tsnd working')