/*
    Can you write a function to traverse a binary tree in-order, and print out the value of each node as it passes?

    4
     \
      5
     /
    6

    The example would output [4, 6, 5] since there is no left child for 4, and 6 is visited in-order before 5.
*/

class Node {
  constructor(val = null) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// O(n)
// InOrder = Left -> Root -> Right
function inorderTraversal(root) {
  const traversal = []

  function traverse(node) {
    if (node.left) {
      traverse(node.left)
    }

    traversal.push(node.val)

    if (node.right) {
      traverse(node.right)
    }
  }

  traverse(root)
  return traversal
}

// Regular binary trees
const tree1 = new Node(4)
tree1.left = new Node(1)
tree1.right = new Node(3)

const tree2 = new Node(5)
tree2.left = new Node(10)
tree2.left.left = new Node(17)
tree2.left.right = new Node(3)
tree2.right = new Node(8)

// Binary search trees
const tree3 = new Node(6)
tree3.left = new Node(3)

const tree4 = new Node(5)
tree4.left = new Node(3)
tree4.left.left = new Node(2)
tree4.left.left.left = new Node(1)

const tree5 = new Node(8)
tree5.left = new Node(6)
tree5.right = new Node(9)
tree5.left.left = new Node(5)
tree5.left.right = new Node(7)
tree5.right.right = new Node(10)

module.exports = {
  Node,
  inorderTraversal,
}
