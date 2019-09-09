/*
5. Longest Palindromic Substring
https://leetcode.com/problems/longest-palindromic-substring/
Medium

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"
*/

// Time complexity: O(n^2) -> expanding a palindrome around its center could take up to O(n) and we do this for each character
// Space complexity: O(1)
function longestPalindrome(str) {
    let startIndex = 0
    let maxLength = 1

    function expandAroundMiddle(left, right) {
        // Expand the middle one index to the right and to the left while there's space and the two characters are the same
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const currentPalLength = right - left + 1

            if (currentPalLength > maxLength) {
                maxLength = currentPalLength
                startIndex = left
            }

            left--
            right++
        }
    }

    for (let i = 0; i < str.length; i++) {
        // Take into account odd lengths
        expandAroundMiddle(i - 1, i + 1)
        // Take into account spaces in between characters so even length strings work
        expandAroundMiddle(i, i + 1)
    }

    return str.slice(startIndex, startIndex + maxLength)
}

module.exports = longestPalindrome
