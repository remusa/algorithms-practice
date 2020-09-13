import { levelOrder, levelOrder2 } from './index'

class Node {
  constructor(value) {
    this.val = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return
    }
    let current = this.root
    while (true) {
      if (value === current.val) {
        return
      }
      if (value < current.val) {
        if (!current.left) {
          current.left = newNode
          return
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }
}

test('Works.', () => {
  const BST = new BinarySearchTree()
  BST.insert(8)
  BST.insert(3)
  BST.insert(10)
  BST.insert(1)
  BST.insert(6)
  BST.insert(14)
  //          8
  //        /   \
  //       3     10
  //      / \      \
  //     1   6     14
  expect(levelOrder(BST.root)).toEqual([[8], [3, 10], [1, 6, 14]])
})

describe('binary tree level order traversal', () => {
  function TreeNode(val) {
    this.val = val
    this.left = this.right = null
  }

  it.only('should traverse the tree in level order', () => {
    const examples = [
      {
        input: [3, 9, 20, null, null, 15, 7],
        output: [[3], [9, 20], [15, 7]],
      },
    ]

    examples.forEach(({ input, output }) => {
      expect(levelOrder2(input)).toEqual(output)
    })
  })
})
