const ll = require('../04_linked_lists/linked_list_doubly_implementation')
const Node = ll.Node
const SinglyLinkedList = ll.SinglyLinkedList

class Stack {
    constructor() {
        this.data = new SinglyLinkedList()
        this.top = null
        this.bottom = null
        this.length = 0
    }

    // O(1)
    peek() {
        if (!this.isEmpty) {
            return this.top
        }
        return null
    }

    // O(1)
    push(value) {
        const newNode = new Node(value)
    }

    // O(1)
    pop() {}

    // O(1)
    isEmpty() {
        return this.length === 0
    }

    printStack() {
        return this.data.printList()
    }
}
