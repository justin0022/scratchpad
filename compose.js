const add5 = (x) => x + 5
const multiply = (x, y) => x * y

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const multiplyAndAdd5 = compose(
    add5,
    multiply
)

console.log(multiplyAndAdd5(5, 2))

