/*
344. Reverse String
Easy
https://leetcode.com/problems/reverse-string/

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

// Time complexity: O(n) -> iterate through the array once
// Space complexity: O(1) -> reverse array in-place
function reverseString2(s) {
  const size = s.length
  let i = 0
  let j = size - 1

  // Go until we reach the mid point
  while (i < size / 2) {
    // Swap elements
    const temp = s[i]
    s[i] = s[j]
    s[j] = temp

    i++
    j--
  }

  return s
}

// Time complexity: O(n) -> iterate through the array once
// Space complexity: O(1) -> reverse array in-place
function reverseString3(s) {
  if (s === '') {
    return s
  }

  return reverseString3(s.substr(1)) + s.charAt(0)
}

export { reverseString, reverseString2, reverseString3 }
