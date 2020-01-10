/*
  110. Balanced Binary Tree
  https://leetcode.com/problems/balanced-binary-tree/

  Given a binary tree, determine if it is height-balanced.

  For this problem, a height-balanced binary tree is defined as:
      a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

  Example 1: Given the following tree [3,9,20,null,null,15,7]:

      3
    / \
    9  20
      /  \
    15   7

  Return true.

  Example 2: Given the following tree [1,2,2,3,3,null,null,4,4]:

        1
        / \
      2   2
      / \
    3   3
    / \
  4   4

  Return false.
*/

function isBalanced(root) {
  if (root == null) return true // base case: we've hit end of a branch while still balanced

  function getTreeHeight(root, height = 0, maxHeight = 0) {
    // recursive tree measuring function
    if (height > maxHeight) {
      maxHeight = height
    }
    if (!root || (!root.left && !root.right)) {
      // check to make sure there is a root and at least one branch
      return maxHeight
    }

    const leftSubtree = root ? getTreeHeight(root.left, height + 1, maxHeight) : maxHeight
    const rightSubtree = root ? getTreeHeight(root.right, height + 1, maxHeight) : maxHeight

    // return the height of the longest branch, which is determined by recursively traversing the tree using getTreeHeight()
    return Math.max(leftSubtree, rightSubtree)
  }

  const leftHeight = root.left ? getTreeHeight(root.left) + 1 : 0 // make sure there's a left branch, height is zero if not
  const rightHeight = root.right ? getTreeHeight(root.right) + 1 : 0

  // check if the current root node is a balanced tree
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false
  }

  // if it is, let's repeat the process on both the left and right branches
  if (!isBalanced(root.left)) {
    return false
  }

  return isBalanced(root.right)
}
