/*
  https://algodaily.com/challenges/validate-a-bst

  Given a binary search tree like the one below, can you write a function that will return true if it is valid?

  Recall that a BST is valid only given the following conditions:
    - The left child subtree of a node contains only nodes with values less than the parent node's.
    - The right child subtree of a node contains only nodes with values greater than the parent node's.
    - Both the left and right subtrees must also be BSTs.
*/

export class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

// inorder: left -> root -> right
function inOrder(node) {
  const output = []

  function traverse(currNode) {
    // Left
    if (currNode.left) {
      traverse(currNode.left)
    }
    // Root
    output.push(currNode.value)
    // Right
    if (currNode.right) {
      traverse(currNode.right)
    }
  }

  traverse(node)

  return output
}

// Traversing tree in order and using a stack for keeping track
// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> O(n) if recursive calls count
export function isValidBST(node) {
  if (!node) {
    return true
  }

  // When traversing in-order, stack should be sorted
  const stack = inOrder(node)

  while (stack.length) {
    const poppedNode = stack.pop()
    const lastNode = stack[stack.length - 1]

    // If the popped node is smaller than the current last node in the stack, it means the stack isn't sorted, so it isnt a BST
    if (poppedNode < lastNode) {
      return false
    }
  }

  return true
}

// Keeping track of minimum and maximum values
export function isValidBST2(root) {
  let valid = true

  function validate(node, min = null, max = null) {
    if (!node) {
      return
    }

    // If node isn't valid return
    if ((min && node.val <= min) || (max && node.val >= max)) {
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
