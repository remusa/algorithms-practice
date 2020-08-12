import { Node, inorderTraversal } from '../day_10_binary_tree_inorder_traversal'

describe('binary tree inorder traversal tests', function () {
  it('should return an array with the inorder traversal of a binary tree', () => {
    // Regular binary trees
    const tree2 = new Node(5)
    tree2.left = new Node(10)
    tree2.left.left = new Node(17)
    tree2.left.right = new Node(3)
    tree2.right = new Node(8)
    expect(inorderTraversal(tree2)).toEqual([17, 10, 3, 5, 8])

    // Binary search trees
    const tree3 = new Node(6)
    tree3.left = new Node(3)
    expect(inorderTraversal(tree3)).toEqual([3, 6])
  })
})
