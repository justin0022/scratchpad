const obj = {
  key0: 'welcome',
  key1: 'hi',
  key2: 'random'
}

const getObjectValues = obj => Object.keys(obj).map(key => obj[key])

console.log(getObjectValues(obj))
