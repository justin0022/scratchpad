// note: I did not write this. Got it from https://hackernoon.com/basic-javascript-algorithms-toolbox-starter-kit-dc2af3ceebad

const uniqArray = (array) => [...new Set(array)]

console.log(uniqArray([1, 2, 3, 4, 5, 5, 5]))
console.log(uniqArray(['1', '2', '3', '4', '5', '5', '5']))
