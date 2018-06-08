const pipe = (...fns) => (...args) => fns.reduce((f, g) => g(f(...args)))

const add5 = x => x + 5
const multiply = (x, y) => x * y

const multiplyAndAdd5 = pipe(
  multiply,
  add5
)

console.log(multiplyAndAdd5(5, 2))
