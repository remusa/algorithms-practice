/*
1143. Longest Common Subsequence
Medium
https://leetcode.com/problems/longest-common-subsequence/

Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.


If there is no common subsequence, return 0.


Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
*/

// Note: a subsequence is not a substring because a substring has to be consecutive and a subsequence may skip characters

// Time complexity: O(n*m) -> nested loops for each character of both strings
// Space complexity: O(n*m) -> size of the matrix is length of text1 * length of text2
function longestCommonSubsequence(text1, text2) {
  /*
    - Think of the rows as the outer loop and the columns as the inner loop.
    - Use 2 pointers, one for each string (imagine it being a matrix). One is for rows and the other for columns.
      - Rows -> text1
      - Columns -> text2
    - Like in the Coin Change problem, build the matrix and traverse it backwards when necessary.
    - When initializing the matrix, add an additional row and column BEFORE and initialize them to 0s.
    - If both characters match, move 1 row and col forward and add 1 to it (down diagonally).
    - If characters don't match, calculate the max of going back in the col (cell above) and going back in the row (cell to the left). Doing this we carry forward the maximum common subsequence
      X a b c d e       X a b c d e
    X 0 0 0 0 0 0     X 0 0 0 0 0 0
    a 0 1 0 0 0 0     a 0 1 1 1 1 1
    c 0 0 0 0 0 0     c 0 1 1 2 2 2
    e 0 0 0 0 0 0     e 0 3 3 3 3 3
  */

  const dp = []

  // Generate the starting matrix adding the additional row and col. Fill the matrix with 0s
  for (let i = 0; i < text1.length + 1; i++) {
    dp.push(Array(text2.length + 1).fill(0))
  }

  // Scan from left to right through the string
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      // If the values match move 1 row and col forward and add 1 to it (down-right diagonally).
      if (text1[i] === text2[j]) {
        // The new value will be the diagonal
        const diagonal = dp[i][j]
        // Calculate the cell taking into account the offset of the additional row/col
        // Increment by the value of the diagonal
        dp[i + 1][j + 1] = diagonal + 1
      }
      // If characters don't match carry forward the maximum common subsequence
      else {
        const above = dp[i][j + 1]
        const left = dp[i + 1][j]
        // Calculate the max of the cell above and the one to the left
        dp[i + 1][j + 1] = Math.max(above, left)
      }
    }
  }

  // If we found the LCS the it's length would be saved in the bottom-right corner.
  // If no subsequence was found the value of the last cell will be 0
  return dp[text1.length][text2.length]
}

export { longestCommonSubsequence }
