const obj = {
  key0: 'welcome',
  key1: 'hi',
  key2: 'random'
}

const getObjectValues = (obj) => Object.keys(obj).map(i => obj[i])

console.log(getObjectValues(obj))
