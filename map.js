const mapArr = (fn) => (arr) => arr.reduce((acc, cur) => [...acc, fn(cur)], [])

const double = mapArr(x => x * 2)

console.log(double([1,2,3]))

