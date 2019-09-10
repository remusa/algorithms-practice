/*
62. Unique Paths
Medium
https://leetcode.com/problems/unique-paths/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
*/

// Time complexity: O(n*m) -> n and m are the dimensions of the matrix
// Space complexity: O(n*m) -> matrix size depends on input matrix
function uniquePaths(m, n) {
    const matrix = []

    for (let row = 0; row < n; row++) {
        matrix.push([])
    }

    // fill out first row
    for (let row = 0; row < n; row++) {
        matrix[row][0] = 1
    }

    // fill out first column
    for (let col = 0; col < m; col++) {
        matrix[0][col] = 1
    }

    for (let row = 1; row < n; row++) {
        for (let col = 1; col < m; col++) {
            const left = matrix[row][col - 1]
            const top = matrix[row - 1][col]

            matrix[row][col] = left + top
        }
    }

    return matrix[matrix.length - 1][m - 1]
}

module.exports = uniquePaths
