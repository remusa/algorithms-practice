/*
	567. Permutation in String
	https://leetcode.com/problems/permutation-in-string/
	https://leetcode.com/problems/permutation-in-string/discuss/639342/JavaScript-Simple-Sliding-Window-Solution

	Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

	Example 1:
		Input: s1 = "ab" s2 = "eidbaooo"
		Output: True
		Explanation: s2 contains one permutation of s1 ("ba").

	Example 2:
		Input:s1= "ab" s2 = "eidboaoo"
		Output: False

	Constraints:
			The input strings only contain lower case letters.
			The length of both given strings is in range [1, 10,000].
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false

  const s1CharCount = new Array(26).fill(0)
  const window = new Array(26).fill(0)

  for (let i = 0; i < s1.length; i++) {
    // 'a'.charCodeAt() === 97;

    // Count ocurrences of substring
    const idx = s1.charCodeAt(i) - 97
    s1CharCount[idx]++

    // Construct window
    const idx2 = s2.charCodeAt(i) - 97
    window[idx2]++
  }

  let start = 0
  let end = s1.length - 1

  // Iterate through the string
  while (end < s2.length) {
    // Check if current permutation exists within substring
    if (s1CharCount.join('') === window.join('')) {
      return true
    }

    // Increment the end of the substring
    end++

    // If we've reached the end of the string then we couldn't find the substring
    if (end === s2.length) {
      return false
    }

    // Slide the window in the second array (the string) for the next iteration
    const startIdx = s2.charCodeAt(start) - 97
    const endIdx = s2.charCodeAt(end) - 97

    window[startIdx]--
    window[endIdx]++

    // Increment the start of the string
    start++
  }

  return false
}

checkInclusion('ab', 'eidbaooo')
// checkInclusion('ab', 'eidboaoo')

module.exports = { checkInclusion }
