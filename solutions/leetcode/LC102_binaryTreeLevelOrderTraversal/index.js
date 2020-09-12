/*
102. Binary Tree Level Order Traversal
Medium
https://leetcode.com/problems/binary-tree-level-order-traversal/

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:

[
    [3],
    [9,20],
    [15,7]
]
*/

// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> unless recursive calls count as n
function levelOrder(root) {
  const res = []

  function helper(node, depth) {
    if (!node) return

    // If array doesn't have subarray
    if (!res[depth]) {
      res[depth] = []
    }

    // Push current value
    res[depth].push(node.val)

    // Recursively call helper function on children
    helper(node.left, depth + 1)
    helper(node.right, depth + 1)
  }

  helper(root, 0)

  return res
}

module.exports = levelOrder
