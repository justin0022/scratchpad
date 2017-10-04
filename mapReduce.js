const mapReduce = (mapFn) => (reduceFn) => (arr) => arr.map(mapFn).reduce(reduceFn)

const reduceFn = (acc, cur) => (acc += cur)

const mapFn = (x) => x * 2

console.log(mapReduce(mapFn)(reduceFn)([1, 2, 3]))

