/*
    You're given a string of random alphanumerical characters with a length between 0 and 1000.

    Write a method to return the first character in the string that does not repeat itself later on.

    firstNonRepeat('asdfsdafdasfjdfsafnnunl') should return 'j'
*/

// O(n)
function firstNonRepeat(str) {
  if (str.length <= 1) {
    return str
  }

  const map = {}
  const arr = str.split('')

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i]
    if (char in map) {
      map[char]++
    } else {
      map[char] = 1
    }
  }

  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      if (map[key] === 1) {
        return key
      }
    }
  }
}

module.exports = {
  firstNonRepeat,
}
