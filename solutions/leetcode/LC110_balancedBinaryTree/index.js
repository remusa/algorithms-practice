/*
  110. Balanced Binary Tree
  Easy
  https://leetcode.com/problems/balanced-binary-tree/
  https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/
  https://docs.google.com/document/d/1-bwNBbL5USfLz3lEjCfLCuDu5dHBo3Dws7RZnXyAwsI/edit

  Given a binary tree, determine if it is height-balanced.

  For this problem, a height-balanced binary tree is defined as:
    - a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function getHeight(root) {
  // base case when binary tree is empty
  if (!root) return 0

  // return the height of the longest branch, which is determined by recursively traversing the tree using getHeight()
  return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}

export function isBalanced(root) {
  // base case: we've hit end of a branch while still balanced
  if (root === null) {
    return true
  }

  // make sure there's a left branch, height is zero if there isn't
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  // check if the current root node is a balanced tree
  const difference = Math.abs(leftHeight - rightHeight)

  // allowed values for (leftHeight - rightHeight) are 1, -1, 0
  const balanced = difference > 1

  if (balanced) {
    return false
  }

  // if it is, let's repeat the process on both the left and right branches
  if (!isBalanced(root.left) || !isBalanced(root.right)) {
    return false
  }

  return true
}

export function isBalanced2(root) {
  // base case: we've hit end of a branch while still balanced
  if (root === null) {
    return true
  }

  function getTreeHeight(root, height = 0, maxHeight = 0) {
    // recursive tree measuring function
    if (height > maxHeight) {
      maxHeight = height
    }

    if (!root || (!root.left && !root.right)) {
      // check to make sure there is a root and at least one branch
      return maxHeight
    }

    const leftSubtree = getTreeHeight(root.left, height + 1, maxHeight)
    const rightSubtree = getTreeHeight(root.right, height + 1, maxHeight)

    // return the height of the longest branch, which is determined by recursively traversing the tree using getTreeHeight()
    return Math.max(leftSubtree, rightSubtree)
  }

  // make sure there's a left branch, height is zero if there isn't
  const leftHeight = root.left ? getTreeHeight(root.left) + 1 : 0
  const rightHeight = root.right ? getTreeHeight(root.right) + 1 : 0

  // check if the current root node is a balanced tree
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false
  }

  // if it is, let's repeat the process on both the left and right branches
  if (!isBalanced2(root.left)) {
    return false
  }

  return isBalanced2(root.right)
}

function getDepth(root) {
  let max = 0

  function dive(node, depth = 1) {
    if (!node) {
      max = Math.max(max, depth - 1)
      return
    }

    dive(node.left, depth + 1)
    dive(node.right, depth + 1)
  }

  dive(root)

  return max
}

function getDepth2(root) {
  if (!root) return 0
  return 1 + Math.max(getDepth2(root.left), getDepth2(root.right))
}

// Time complexity: O(n^2) -> maxDepth is O(n), calculated n times for each node
// Space complexity: O(n) -> max number of stack frames
export function isBalanced3(root) {
  if (!root) return true

  const leftDepth = getDepth(root.left)
  const rightDepth = getDepth(root.right)
  const isBalanced = Math.abs(leftDepth - rightDepth) > 1

  if (!isBalanced) {
    return false
  }

  isBalanced3(root.left)
  isBalanced3(root.right)

  return isBalanced(root.left) && isBalanced(root.right)
}
