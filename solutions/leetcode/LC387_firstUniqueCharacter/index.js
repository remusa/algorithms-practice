/*
387. First Unique Character in a String
Easy
https://leetcode.com/problems/first-unique-character-in-a-string/

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.


Note: You may assume the string contains only lowercase English letters.
*/

// Time complexity: O(n) -> iterate 2x through the string
// Space complexity: O(1) -> max numbers in the map is 64 (English alphabet uppercase + lowercase)
function firstUniqChar(s) {
  const map = new Map()

  // Get ocurrences of characters in string
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (map.get(char) === 1) {
      return i
    }
  }

  return -1
}

// Time complexity: O(n^2) -> loop within a loop
// Space complexity: O(1) -> max numbers in the map is 64 (English alphabet uppercase + lowercase)
function firstUniqChar2(s) {
  // Get ocurrences of characters in string
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i
    }
  }

  return -1
}

export { firstUniqChar, firstUniqChar2 }
