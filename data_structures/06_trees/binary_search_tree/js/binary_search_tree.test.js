import { BinarySearchTree } from './binary_search_tree'

describe('binary search tree tests', () => {
    it('should perform the tree operations', () => {
        //     9
        //  4     20
        // 1  6  15  170

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

        // BFS & DFS
        // expect(bstTree.breadthFirstSearch()).toEqual([9, 4, 20, 1, 6, 15, 170])
        // expect(bstTree.depthFirstSearch()).toEqual([9, 4, 1, 6, 20, 15, 170])

        // Tree traversals
        expect(bstTree.inOrderTraversal()).toEqual([1, 4, 6, 9, 15, 20, 170])
        expect(bstTree.preOrderTraversal()).toEqual([9, 4, 1, 6, 20, 15, 170])
        expect(bstTree.postOrderTraversal()).toEqual([1, 6, 4, 15, 170, 20, 9])

        expect(bstTree.delete(1).value).toEqual(1)
        expect(bstTree.inOrderTraversal()).toEqual([4, 6, 9, 15, 20, 170])
        // expect(bstTree.delete(170).value).toEqual(170)
    })
})
