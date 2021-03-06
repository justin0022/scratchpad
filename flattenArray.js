const input = [[1, 2, 3], [1, 2, 3, 4], [1], [1, 2, 3, 4, 5, 6]]
// const input = [1, 2, 3, [4, 5, 6], 7, 8, 9]
const nested = [[1, 2, 3], [1, 2, 3, 4], [1], [1, 2, 3, 4, 5, 6, [1, 2, 3]], [[[]]], 1]

const flattenArray = array => array.reduce((acc, cur) => ([...acc, ...cur]), [])

console.log(flattenArray(input))
console.log(flattenArray(nested))
