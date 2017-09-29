const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const add5 = (x) => x + 5
const multiply = (x, y) => x * y

const multipleAndAdd5 = compose(
    add5,
    multiply
)

