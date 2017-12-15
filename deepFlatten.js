const nested = [[1, 2, 3], [1, 2, 3, 4], [1], [1, 2, 3, 4, 5, 6, [1, 2, 3]], [[[]]], 1]

const deepFlatten = arr => arr.reduce((acc, cur) => Array.isArray(cur) ? [...acc, ...deepFlatten(cur)] : [...acc, cur], [])

console.log(deepFlatten(nested))
