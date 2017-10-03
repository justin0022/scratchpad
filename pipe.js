const add5 = (x) => x + 5
const multiply = (x, y) => x * y

const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

const multiplyAndAdd5P = pipe(
    multiply,
    add5
)

console.log(multiplyAndAdd5P(5, 2))
