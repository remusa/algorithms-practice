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

  function dive(node, depth = 1) {
    if (!node) {
      // If node is null then 'depth' is invalid but depth above was valid
      maxDepth = Math.max(maxDepth, depth - 1)
      return
    }

    // Recursively call helper function on children
    dive(node.left, depth + 1)
    dive(node.right, depth + 1)
  }

  dive(root)

  return maxDepth
}

// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(k) -> k is the height of the tree
function maxDepth2(root) {
  if (!root) return 0

  return 1 + Math.max(maxDepth2(root.left), maxDepth2(root.right))
}

// Using BFS
// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(n) -> where n is the level with the most nodes
function maxDepth3(root) {
  if (!root) return 0

  const queue = [root]
  let maxDepth = 0

  while (queue.length) {
    let size = queue.length
    maxDepth++

    while (size) {
      // Remove first element of the queue
      const item = queue.shift()

      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)

      size--
    }
  }

  return maxDepth
}

export { maxDepth, maxDepth2, maxDepth3 }
