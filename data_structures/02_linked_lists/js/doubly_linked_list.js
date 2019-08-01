class Node {
    constructor(value, next = null, previous = null) {
        this.value = value
        this.next = next
        this.previous = previous
    }
}

class DoublyLinkedList {
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
            return this
        }

        // 4. Point the tail (end of the list) to the new node
        this.tail.next = newNode

        // 5. Point the new node previous pointer to the tail
        newNode.previous = this.tail

        // 6. Update the tail to the new node
        this.tail = newNode

        this.length++
        return this
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
            return this
        }

        // 4. Point the new node to the head
        newNode.next = this.head

        // 5. Point the new node previous pointer to null
        this.head.previous = newNode

        // 6. Update the head to the new node
        this.head = newNode

        this.length++
        return this
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
        let follower = leader.next // this.traverseToIndex(index)

        // 4. Update the leader to point to the new node
        leader.next = newNode

        // 5. Point the new node to the follower's next and previous pointers
        newNode.next = follower
        newNode.previous = leader

        // 6. Point the follower previous to the new node
        follower.previous = newNode

        this.length++
        return this
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
        let follower = nodeToDelete.next

        // 4. Update the next pointer of the leader to skip the node to be deleted
        leader.next = nodeToDelete.next

        // 5. Update the previous pointer to skip the node to be deleted
        follower.previous = nodeToDelete.previous

        // 6. Delete the node
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

    getValues() {
        const arr = []

        this.printList()
            .map(node => {
                arr.push(node.value)
            })
            .toString()

        return arr
    }
}

module.exports = {
    DoublyLinkedList,
}
