/*
    Write a function that reverses a string. The input string is given as an array of characters char[].

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    You may assume all the characters consist of printable ascii characters.

    Example 1:

    Input: ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Example 2:

    Input: ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]
*/

function reverseString(str) {
  if (str.length <= 1) {
    return str
  }

  const length = str.length - 1
  const reversed = []

  for (let i = length; i >= 0; i--) {
    reversed.push(str[i])
  }

  return reversed.join('')
}

module.exports = {
  reverseString,
}