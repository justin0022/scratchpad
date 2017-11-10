const multiplyArray = arr =>
  arr.map((el, i) =>
    [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)]
      .reduce((acc, cur) => (acc * cur)))

console.log(multiplyArray([1, 2, 3, 4, 0]))
