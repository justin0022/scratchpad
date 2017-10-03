const filterArr = (comparator) => (arr) => arr.reduce((acc, cur) => comparator(cur) ? [...acc, cur] : acc, [])

const filterGreaterThan5 = filterArr(x => x > 5)

console.log(filterGreaterThan5([1, 2, 3, 4, 5, 6, 7]))
