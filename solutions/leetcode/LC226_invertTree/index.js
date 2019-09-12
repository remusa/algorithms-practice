/*
226. Invert Binary Tree
Easy
https://leetcode.com/problems/invert-binary-tree/

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

Trivia:
This problem was inspired by this original tweet by Max Howell:

    Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
*/

// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> unless recursive calls count as n
function invertTree(root) {
    function invert(node) {
        if (!node) return

        // Swap children
        const oldLeft = node.left
        node.left = node.right
        node.right = oldLeft

        // Recursively call helper function on children
        invert(node.left)
        invert(node.right)
    }

    invert(root)

    return root
}

module.exports = invertTree
