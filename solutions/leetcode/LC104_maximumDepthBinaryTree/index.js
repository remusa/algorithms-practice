/*
104. Maximum Depth of Binary Tree
Easy
https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
*/

// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> unless recursive calls count as n
function maxDepth(root) {
  let maxDepth = 0

  function dive(node, depth) {
    if (!node) {
      // If node is null then 'depth' is invalid but depth above was valid
      maxDepth = Math.max(maxDepth, depth - 1)
      return
    }

    // Recursively call helper function on children
    dive(node.left, depth + 1)
    dive(node.right, depth + 1)
  }

  dive(root, 1)

  return maxDepth
}

function maxDepth(root) {
  let maxDepth = 0

  return maxDepth
}

export { maxDepth }
