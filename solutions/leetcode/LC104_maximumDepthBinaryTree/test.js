import { maxDepth, maxDepth2 } from './index'

class Node {
  constructor(value) {
    this.value = value
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
      if (value === current.value) {
        return
      }
      if (value < current.value) {
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

test('Works for Binary Trees of with 1, 2, and 3 levels.', () => {
  const BST = new BinarySearchTree()
  BST.insert(8)
  expect(maxDepth(BST.root)).toEqual(1)
  BST.insert(3)
  BST.insert(10)
  expect(maxDepth(BST.root)).toEqual(2)
  BST.insert(14)
  //          8
  //        /   \
  //       3     10
  //      / \      \
  //               14
  expect(maxDepth(BST.root)).toEqual(3)
})

test('Works for Binary Tree with 0 levels', () => {
  const BST = new BinarySearchTree()
  expect(maxDepth(BST.root)).toEqual(0)
})

describe('maximum depth of a binary tree', () => {
  function TreeNode(val) {
    this.val = val
    this.left = this.right = null
  }

  it('should traverse the tree in level order', () => {
    const examples = [
      {
        input: [3, 9, 20, null, null, 15, 7],
        output: 3,
      },
    ]

    examples.forEach(({ input, output }) => {
      expect(maxDepth2(input)).toEqual(output)
    })
  })
})
