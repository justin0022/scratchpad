const input = [[1,2,3],[1,2,3,4],[1],[1,2,3,4,5,6]]
const nested = [[1,2,3],[1,2,3,4],[1],[1,2,3,4,5,6,[1,2,3]]]

const flattenArray = (array) => array.reduce((acc, subArray) => [...acc, ...subArray])

console.log(flattenArray(input))
console.log(flattenArray(nested))