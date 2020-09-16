/*
48. Rotate Image
Medium
https://leetcode.com/problems/rotate-image/

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]


Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

// Time complexity: O(n^2) = O(n + (n^2 / 2)) -> reverse matrix + nested loops (half traversal)
// Space complexity: O(1) -> mutate matrix in-place, use 1 variable (temp)
function rotate(matrix) {
  // 1. Reverse the outer arrays (0->2, 2->0)
  matrix = matrix.reverse() // O(n)

  // 2. Flip the rest of the coordinates (0,1 -> 1,0)
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      // Only flip if row and column are different (otherwise they're already in place)
      if (row !== col) {
        const temp = matrix[row][col]
        matrix[row][col] = matrix[col][row]
        matrix[col][row] = temp
      }
    }
  }

  // Only for testing
  return matrix
}

export { rotate }
