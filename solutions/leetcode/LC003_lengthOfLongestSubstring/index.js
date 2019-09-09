/*
    https://leetcode.com/problems/longest-substring-without-repeating-characters/

    Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:

    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:

    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
                Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Time complexity: O(n) -> visit each character only once
// Space complexity: O(min(m, n)) -> number of keys in map is bounded by the size of the string n and the size of the charset/alphabet m
function lengthOfLongestSubstring(str) {
    const windowCharsMap = {}
    let windowStart = 0
    let maxLength = 0

    // Let i be the end of the window
    for (let i = 0; i < str.length; i++) {
        const endChar = str[i]

        // If current character exists has already been found in the sliding window (it exists in the map)
        if (windowCharsMap[endChar] >= windowStart) {
            // Move the start of the window
            windowStart = windowCharsMap[endChar] + 1
        }

        // As the window increases, we want to put the current endChar in the map, and if a duplicate value was found before, then update that character's position to the current index
        windowCharsMap[endChar] = i

        // Update the maxLength to the max value of the current maxLength and the size of the current window + 1 (because we started at index 0)
        maxLength = Math.max(maxLength, i - windowStart + 1)
    }

    return maxLength
}

module.exports = lengthOfLongestSubstring
