function linearSearch(array, value) {
  const length = array.length

  if (length === 0) {
    return -1
  }

  for (let i = 0; i < length; i++) {
    if (value === array[i]) {
      return i
    }
  }

  return -1
}

module.exports = {
  linearSearch,
}
