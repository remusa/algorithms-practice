import { isValidBST, isValidBST2, isValidBST3 } from './index'

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

test('Returns true for valid BST.', () => {
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
  expect(isValidBST(BST.root)).toEqual(true)
})

test('Returns true for empty BST.', () => {
  const BST = new BinarySearchTree()
  expect(isValidBST(BST.root)).toEqual(true)
})

test('Returns false for invalid BST.', () => {
  const BST = new BinarySearchTree()
  BST.insert(8)
  BST.insert(3)
  BST.insert(10)
  BST.root.right.left = new Node(6)
  //          8
  //        /   \
  //       3     10
  //            /
  //           6
  expect(isValidBST(BST.root)).toEqual(false)
})

it('should return true if the BST is valid', () => {
  const examples = [
    {
      input: [2, 1, 3],
      output: true,
    },
    {
      input: [0, null, -1],
      output: false,
    },
  ]

  examples.forEach(({ input, output }) => {
    expect(isValidBST(input)).toEqual(output)
    expect(isValidBST2(input)).toEqual(output)
    expect(isValidBST3(input)).toEqual(output)
  })
})
