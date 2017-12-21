// const testFunc = (add = (a, b) => a + b) => add

// console.log(testFunc()(1, 5))
// console.log(testFunc((a, b) => a - b)(1, 5))

const data = [1, 2, 3, 4, 5, 6]

const filterWithDefault = (filteringFunc = x => x > 5) => data => data.filter(filteringFunc)

console.log(filterWithDefault()(data)) // [6]
console.log(filterWithDefault(x => x < 5)(data)) // [1, 2, 3, 4]
