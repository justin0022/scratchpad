const reverseString = ([first, ...rest]) => {
  if (first === undefined) return ''
  if (rest.length === 0) return first
  else return reverseString(rest) + first
}

const reverseString2 = ([first, ...rest]) =>
  (first === undefined)
    ? ''
    : (rest.length === 0)
      ? first
      : reverseString(rest) + first

console.log(reverseString2('hello'))

const testRest = ([first, ...rest]) => console.log(first, rest)

testRest([1, 2, 3, 4])
testRest('hello')
// testRest(0)
