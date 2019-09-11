/*
79. Word Search
Medium
https://leetcode.com/problems/word-search/

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

// Time complexity: O(n*m) -> n and m are length and width of input matrix
// Space complexity: O(1) -> matrix is modified in-place
function exist(board, word) {
    let found = false

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const cell = board[row][col]

            if (cell === word[0]) {
                dfs(row, col, 0, word)
            }
        }
    }

    function dfs(row, col, count, word) {
        if (count === word.length) {
            found = true
            return
        }

        if (
            row < 0 ||
            row >= board.length ||
            col < 0 ||
            col >= board[0].length ||
            board[row][col] !== word[count] ||
            found
        ) {
            return
        }

        const temp = board[row][col]

        // Mark cell as visited
        board[row][col] = ''

        // Run DFS recursively
        dfs(row + 1, col, count + 1, word)
        dfs(row - 1, col, count + 1, word)
        dfs(row, col + 1, count + 1, word)
        dfs(row, col - 1, count + 1, word)

        // Reset visited cells to their old value
        board[row][col] = temp
    }

    return found
}

module.exports = exist
