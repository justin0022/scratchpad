const reverseString = ([first, ...rest]) => {
  if (first === undefined) return ''
  if (rest.length === 0) return first
  else return reverseString(rest) + first
}
