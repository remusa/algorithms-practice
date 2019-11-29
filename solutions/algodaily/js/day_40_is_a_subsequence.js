/*
    Given two strings, one named sub and the other str, determine if sub is a subsequence of str.
​
    For the sake of the exercise, let's assume that these strings only have lower case characters.

    What is subsequence? You can think of it as a substring, but the letters don't have to be adjacent. It is formed from the base string by deleting some or none of the characters without affecting the relative positions of the other letters.​
*/

function isASubsequence(sub, str) {
  if (!sub.length || !str.length || sub.length > str.length) {
    return false
  }

  let i = 0
  let pointer = 0

  // Move right pointer (sub.length) to the right
  while (i <= str.length) {
    if (str[i] === sub[pointer]) {
      pointer++
      if (pointer === sub.length) {
        return true
      }
    }
    i++
  }

  return false
}

module.exports = {
  isASubsequence,
}
