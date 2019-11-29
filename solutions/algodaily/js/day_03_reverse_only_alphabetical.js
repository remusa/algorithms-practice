/*
    You are given a string that contains alphabetical characters (a - z, A - Z) and some other characters ($, !, etc.). For example, one input may be:

    'sea!$hells3'

    Can you reverse only the alphabetical ones?
*/

// (str.charCodeAt(start) >= 65 && str.charCodeAt(start) <= 90) |
// (str.charCodeAt(start) >= 97 && str.charCodeAt(start) <= 122)

function isAlphabetic(char) {
  return /[a-zA-Z]/.test(char)
}

// O(n)
function reverseOnlyAlphabetical(str) {
  const arr = str.split('')
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    if (!isAlphabetic(arr[start])) {
      start++
    } else if (!isAlphabetic(arr[end])) {
      end--
    } else {
      const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp

      start++
      end--
    }
  }

  return arr.join('')
}

console.log(reverseOnlyAlphabetical('sea!$hells3'))
// console.log(reverseOnlyAlphabetical('1kas90jda3'))

module.exports = {
  reverseOnlyAlphabetical,
}
