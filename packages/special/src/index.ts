
/**
* @description any类型与任何类型的交叉都是any
*/
type IsAny<T> = 6 extends (6 & T) ? true : false
type IsAnyResult = IsAny<any>






console.log('special tsnd working')