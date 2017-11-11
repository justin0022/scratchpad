const quicksort = (arr) => {
  if (arr.length === 0) return []
  const first = arr.shift()
  const smallerSorted = quicksort(arr.filter(x => x <= first))
  const largerSorted = quicksort(arr.filter(x => x > first))
  return [...smallerSorted, first, ...largerSorted]
}

console.log(quicksort([3, 2, 1]))
