/*
73. Set Matrix Zeroes
Medium
https://leetcode.com/problems/set-matrix-zeroes/

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
    [1,1,1],
    [1,0,1],
    [1,1,1]
]
Output:
[
    [1,0,1],
    [0,0,0],
    [1,0,1]
]

Example 2:

Input:
[
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]
Output:
[
    [0,0,0,0],
    [0,4,5,0],
    [0,3,1,0]
]

Follow up:

    A straight forward solution using O(mn) space is probably a bad idea.
    A simple improvement uses O(m + n) space, but still not the best solution.
    Could you devise a constant space solution?
*/

// Time complexity: O(n*m) -> n and m are length and width of input matrix
// Space complexity: O(1) -> matrix is modified in-place
function setZeroes(matrix) {
    let firstColumnHasZero = false
    let firstRowHasZero = false

    // Check if first column has 0
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColumnHasZero = true
            break
        }
    }

    // Check if first row has 0
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            firstRowHasZero = true
            break
        }
    }

    // Use first row and column as flags, if rest of cells have 0s
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            const cell = matrix[row][col]

            if (cell === 0) {
                matrix[row][0] = 0
                matrix[0][col] = 0
            }
        }
    }

    // Zero out cells based on flags in first row and column
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0
            }
        }
    }

    // Zero out first column
    if (firstColumnHasZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }

    // Zero out first row
    if (firstRowHasZero) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0
        }
    }
}

module.exports = setZeroes
