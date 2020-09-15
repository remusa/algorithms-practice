/*
98. Validate Binary Search Tree
Medium
https://leetcode.com/problems/validate-binary-search-tree/

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> O(n) if recursive calls count
function isValidBST(root) {
  let valid = true

  function validate(node, min = null, max = null) {
    if (!node) return

    // If node isn't valid return
    if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
      valid = false
      return
    }

    // Node is valid
    validate(node.left, min, node.val)
    validate(node.right, node.val, max)
  }

  validate(root)

  return valid
}

// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> O(n) if recursive calls count
function isValidBST2(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  if (!root) return true

  // Validate current node
  if (root.val <= min || root.val >= max) return false

  // Traverse throught both subtrees
  return isValidBST2(root.left, min, root.val) && isValidBST2(root.right, root.val, max)
}

// Traversing tree in order and using a stack for keeping track
// If BST is valid, stack should be ordered
// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> O(n) if recursive calls count
function isValidBST3(root) {
  if (!root) return true

  const stack = []

  // Inorder traversal -> left-root-right
  function traverse(node) {
    if (node.left) traverse(node.left)
    stack.push(node.val)
    if (node.right) traverse(node.right)
  }

  // When traversing in-order, stack should be sorted
  traverse(root)

  // If the popped node is smaller or equal than the current last node in the stack, it means the stack isn't sorted, so it isn't a BST
  while (stack.length) {
    const popped = stack.pop()
    const last = stack[stack.length - 1]

    if (popped <= last) {
      return false
    }
  }

  return true
}

export { isValidBST, isValidBST2, isValidBST3 }
