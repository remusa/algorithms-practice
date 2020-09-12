import { Node, isValidBST, isValidBST2 } from '../day_33_validate_bst'

describe('valid binary search tree tests', function () {
  it('should check if binary search tree is valid', () => {
    // Regular binary trees
    const tree = new Node(5)
    tree.left = new Node(3)
    tree.right = new Node(9)

    const tree1 = new Node(4)
    tree1.left = new Node(1)
    tree1.right = new Node(3)
    expect(isValidBST(tree1)).toBe(false)

    const tree2 = new Node(5)
    tree2.left = new Node(10)
    tree2.left.left = new Node(17)
    tree2.left.right = new Node(3)
    tree2.right = new Node(8)
    expect(isValidBST(tree2)).toBe(false)

    // Binary search trees
    const tree3 = new Node(6)
    tree3.left = new Node(3)
    expect(isValidBST(tree3)).toBe(true)

    const tree4 = new Node(5)
    tree4.left = new Node(3)
    tree4.left.left = new Node(2)
    tree4.left.left.left = new Node(1)
    expect(isValidBST(tree4)).toBe(true)

    const tree5 = new Node(8)
    tree5.left = new Node(6)
    tree5.right = new Node(9)
    tree5.left.left = new Node(5)
    tree5.left.right = new Node(7)
    tree5.right.right = new Node(10)
    expect(isValidBST(tree5)).toBe(true)
  })
})
