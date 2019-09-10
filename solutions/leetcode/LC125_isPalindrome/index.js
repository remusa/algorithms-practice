/*
125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/
Easy

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false
*/

// Naive solution is reversing the string, but it would be O(n)

// Time complexity: O(n) ->
// Space complexity: O(1) -> pointers take constant space
function isPalindrome(str) {
    // A palindrome is a word where each half mirrors each other

    // Sanitize the input by cleaning non-alphanumeric characters and spaces
    const sanitized = str.toLowerCase().replace(/[\W_]/g, '')

    let left = 0
    let right = sanitized.length - 1

    while (left < right) {
        if (sanitized[left] !== sanitized[right]) {
            return false
        }

        left++
        right--
    }

    return true
}

module.exports = isPalindrome
