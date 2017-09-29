const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const add5 = (x) => x + 5
const multiply = (x, y) => x * y

const multipleAndAdd5C = compose(
    add5,
    multiply
)

console.log(multipleAndAdd5C(5, 2))

const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

const multiplyAndAdd5P = pipe(
    multiply,
    add5
)

console.log(multiplyAndAdd5P(5, 2))