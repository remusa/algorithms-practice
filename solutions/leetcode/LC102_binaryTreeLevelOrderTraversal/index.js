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
  const levels = []

  function helper(node, depth) {
    if (!node) return

    // If array doesn't have subarray
    if (!levels[depth]) {
      levels[depth] = []
    }

    // Push current value
    levels[depth].push(node.val)

    // Recursively call helper function on children
    helper(node.left, depth + 1)
    helper(node.right, depth + 1)
  }

  helper(root, 0)

  return levels
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// Time complexity: O(n) -> one iteration per node
// Space complexity: O(k) -> if output isn't considered extra space, O(n+k) if it is
function levelOrder2(root) {
  if (!root) return []

  const queue = [root]
  const levels = []

  while (queue.length) {
    let size = queue.length
    const currentLevel = []

    while (size > 0) {
      // Remove first element from queue
      const curr = queue.shift()

      // Save value to level array
      currentLevel.push(curr.val)

      // Add children to queue
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }

      size--
    }

    levels.push(currentLevel)
  }

  return levels
}

export { levelOrder, levelOrder2 }
