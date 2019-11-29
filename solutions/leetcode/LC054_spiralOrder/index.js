/*
54. Spiral Matrix
Medium
https://leetcode.com/problems/spiral-matrix/

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input:
[
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

// Time complexity: O(n) -> n is the number of cells in matrix
// Time complexity: O(n*m) -> n and m are length and width of matrix
// Space complexity: O(n) -> result matrix same size as input matrix
function spiralOrder(matrix) {
  if (!matrix.length) return []

  const spiralArray = []

  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let direction = 'right'

  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        spiralArray.push(matrix[top][i])
      }
      top++
      direction = 'down'
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        spiralArray.push(matrix[i][right])
      }
      right--
      direction = 'left'
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        spiralArray.push(matrix[bottom][i])
      }
      bottom--
      direction = 'up'
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        spiralArray.push(matrix[i][left])
      }
      left++
      direction = 'right'
    }
  }

  return spiralArray
}

module.exports = spiralOrder
