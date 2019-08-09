import { LinkedList, LinkedListNode } from '../day_31_implement_a_linked_list'

describe('linked list implementation tests', () => {
    it('should perform the linked list operations', () => {
        function createNodes(head, nodes) {
            for (let i = 0; i < nodes.length; i++) {
                const newNode = new LinkedListNode(nodes[i])
                head.next = newNode
                head = newNode
            }
        }

        const list1 = new LinkedListNode(3)
        const nodes1 = [4, 5, 6, 7, 8, 9, 10]
        createNodes(list1, nodes1)

        const list2 = new LinkedListNode(1)
        const nodes2 = [2, 3, 4, 5, 6, 7, 8]
        createNodes(list2, nodes2)
    })
})
