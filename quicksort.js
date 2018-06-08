const quicksort = arr => {
  if (arr.length === 0) return []
  const first = arr.shift()
  const smallerSorted = quicksort(arr.filter(x => x <= first))
  const largerSorted = quicksort(arr.filter(x => x > first))
  return [...smallerSorted, first, ...largerSorted]
}

const qs = arr => {
  if (arr.length === 0) return []
  const first = arr.shift()
  return [...qs(arr.filter(x => x <= first)), first, ...qs(arr.filter(x => x > first))]
}

console.log(quicksort([3, 2, 1, -5, 10, -100, 10000, 12345612453, 13, 0, 0]))
console.log(qs([3, 2, 1, -5, 10, -100, 10000, 12345612453, 13, 0, 0]))
