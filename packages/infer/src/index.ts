/**
 * @description ts 实现 Array.prototype.pop
 */
type Pop<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer result,unknown] ? result : never
type PopArr = Pop<[1,2,3]>

console.log('infer tsnd working')