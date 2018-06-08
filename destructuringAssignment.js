let { name } = { property: 'hello', name: 'Justin' }

console.log(name)

let obj = { a: [{ foo: 123, bar: 'abc' }, {}], b: true }
let { a: [{ foo }] } = obj

console.log(foo)