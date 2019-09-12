/*
200. Number of Islands
Medium
https://leetcode.com/problems/number-of-islands/

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

// Time complexity: O(n) -> number of cells in matrix
// Time complexity: O(n*m) -> n and m are width and height of the matrix
// Space complexity: O(1) -> matrix is modified in place
function numIslands(grid) {
    let count = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const cell = grid[row][col]

            // If cell is island
            if (cell === '1') {
              count++
              // Sink island and check for other connecting land
              dfs(grid, row, col)
            }
        }
    }

    function dfs(grid, row, col) {
        if (row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length ||
            grid[row][col] === '0') {
                return
            }

        // We're in a valid cell and cell isn't water
        // Sink current cell
        grid[row][col] = '0'

        // Check cells above, below, left and right for land
        dfs(grid, row - 1, col)
        dfs(grid, row + 1, col)
        dfs(grid, row, col - 1)
        dfs(grid, row, col + 1)
    }

    return count
}

module.exports = numIslands
