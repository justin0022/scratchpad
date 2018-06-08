const mapReduce = mapFn => reduceFn => arr => arr.map(mapFn).reduce(reduceFn)

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const reduceFn = (acc, cur) => (acc += cur)

const mapFn = x => x * 2

console.log(mapReduce(mapFn)(reduceFn)([1, 2, 3]))

const composeFn = compose(
  x => x * 2,
  x => x - 1
)

console.log(mapReduce(composeFn)(reduceFn)([1, 2, 3]))
