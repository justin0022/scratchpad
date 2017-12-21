const testFunc = (add = (a, b) => a + b) => add

console.log(testFunc()(1, 5))
console.log(testFunc((a, b) => a - b)(1, 5))
