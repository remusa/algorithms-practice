/*
242. Valid Anagram
https://leetcode.com/problems/valid-anagram/
Easy

Given two strings s and t, write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

// Time complexity: O(n)
// Space complexity: O(1) -> hash table will have 26 key-value pairs at most
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const counter = {}

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        counter[char] = counter[char] + 1 || 1
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i]

        if (!counter[char]) {
            return false
        }

        counter[char]--
    }

    return true
}

module.exports = isAnagram
