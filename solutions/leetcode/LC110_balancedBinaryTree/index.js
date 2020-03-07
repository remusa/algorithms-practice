/*
  110. Balanced Binary Tree
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
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function getHeight(root) {
  // base case when binary tree is empty
  if (root === null) {
    return 0
  }

  const leftSubtreeHeight = getHeight(root.left)
  const rightSubtreeHeight = getHeight(root.right)

  // return the height of the longest branch, which is determined by recursively traversing the tree using getHeight()
  return 1 + Math.max(leftSubtreeHeight, rightSubtreeHeight)
}

function isBalanced(root) {
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
  if (difference > 1) {
    return false
  }

  // if it is, let's repeat the process on both the left and right branches
  const isLeftBalanced = isBalanced(root.left)

  if (!isLeftBalanced) {
    return false
  }

  const isRightBalanced = isBalanced(root.right)

  if (!isRightBalanced) {
    return false
  }

  return true
}
