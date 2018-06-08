const add5 = x => x + 5
const multiply = (x, y) => x * y

// const multiplyArr = (ar) => ar.reduce((a, b) => (a *= b))

const compose = (...fns) => (...args) => fns.reduce((f, g) => f(g(...args)))

// fns.reduce((f, g) => (...args) => f(g(...args))) //=> (...args) => add5(multiply(...args))

const multiplyAndAdd5 = compose(
  add5,
  multiply
)

console.log(multiplyAndAdd5(5, 2))
