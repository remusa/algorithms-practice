import { BinarySearchTree } from './binary_search_tree'

describe('binary search tree tests', () => {
    it('should perform the tree operations', () => {
        const bstTree = new BinarySearchTree()

        bstTree.insert(9)
        bstTree.insert(4)
        bstTree.insert(6)
        bstTree.insert(20)
        bstTree.insert(170)
        bstTree.insert(15)
        bstTree.insert(1)

        expect(bstTree.search(999)).toEqual(null)
        expect(bstTree.search(170)).toEqual({ value: 170, left: null, right: null })

        expect(bstTree.delete(1)).toEqual({ value: 1, left: null, right: null })
    })
})
