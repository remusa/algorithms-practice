class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 1
    }

    // O(1)
    append(value) {
        // 1. Create the new node
        const newNode = new Node(value)

        // 2. Check if list is empty (no head)
        if (!this.head) {
            // 3. Update the current head and tail to the new node
            this.head = newNode
            this.tail = newNode
            return this.printList()
        }

        // 4. Point the tail to the new node
        this.tail.next = newNode

        // 5. Update the tail to the new node
        this.tail = newNode

        this.length++
        return this.printList()
    }

    // O(1)
    prepend(value) {
        // 1. Create the new node
        const newNode = new Node(value)

        // 2. Check if list is empty (no head)
        if (!this.head) {
            // 3. Update the current head and tail to the new node
            this.head = newNode
            this.tail = newNode
            return this.printList()
        }

        // 4. Point the new node to the head
        newNode.next = this.head

        // 5. Update the head to the new node
        this.head = newNode

        this.length++
        return this.printList()
    }

    // O(n)
    lookup(value) {
        // 1. Check if list is empty
        if (!this.head) {
            return null
        }

        // 2. Traverse the list starting from the head and compare each node
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }

        return null
    }

    // O(n)
    insert(index, value) {
        // 1. If index isn't valid add it to the end
        if (index >= this.length) {
            return this.append(value)
        }

        // 2. Create the new node
        const newNode = new Node(value)

        // 3. Traverse the list and find the previous and following nodes of the specified index
        let leader = this.traverseToIndex(index - 1)
        let follower = leader.next // same as getting this.traverseToIndex(index)

        // 4. Update the leader to point to the new node
        leader.next = newNode

        // 5. Point the new node to the follower
        newNode.next = follower

        this.length++
        return this.printList()
    }

    // O(n)
    traverseToIndex(index) {
        let currentNode = this.head
        let count = 0
        while (count < index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode
    }

    // O(n)
    delete(index) {
        // 1. Check if list is empty
        if (!this.head) {
            return null
        }

        // 3. Traverse the list and find the previous and following nodes of the specified index
        let leader = this.traverseToIndex(index - 1)
        let nodeToDelete = leader.next

        // 4. Update the pointer of the leader
        leader.next = nodeToDelete.next

        // 5. Delete the node
        // delete nodeToDelete

        this.length--
        return nodeToDelete
    }

    printList() {
        const nodes = []
        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        return nodes
    }

    reverse() {
        // 0. Check if there's only 1 element in the list
        if (!this.head.next) {
            return this.head
        }

        // 1. Get the first 2 nodes
        let first = this.head
        let second = first.next

        // 2. Point the tail to the head (inverting it)
        this.tail = this.head

        // 3. Traverse the linked list
        while (second) {
            // 4. Save the next node
            const temp = second.next

            // 5. Point the next node of the current node to the previous node
            second.next = first

            // 6. Switch the first node to be the second
            first = second

            // 7. Switch the second node to be the saved one (third)
            second = temp
        }

        // 8. Point the head to null (because it would be the tail's next)
        this.head.next = null

        // 9. Point the head to be the first element
        this.head = first

        return this.printList()
    }
}

const myLinkedList = new SinglyLinkedList()

myLinkedList.append(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)

myLinkedList.lookup(16)
console.log(myLinkedList.printList())

myLinkedList.insert(2, 99)
console.log(myLinkedList.printList())
myLinkedList.insert(20, 88)
console.log(myLinkedList.printList())

myLinkedList.delete(4)
console.log(myLinkedList.printList())

myLinkedList.reverse()
console.log(myLinkedList.printList())

module.exports = {
    Node,
    SinglyLinkedList,
}
