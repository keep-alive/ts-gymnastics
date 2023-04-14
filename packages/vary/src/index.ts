type Pop<Arr extends unknown[]> = Arr extends [... infer result,unknown] ? result : []
type Val = Pop<[1,2,3,6]>

console.log('tsnd working')