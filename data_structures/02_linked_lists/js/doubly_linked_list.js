class Node {
    constructor(value, next = null, previous = null) {
        this.value = value
        this.next = next
        this.prev = previous
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // O(1) -> adds to the end
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
        newNode.prev = this.tail

        // 6. Update the tail to the new node
        this.tail = newNode

        this.length++
        return this
    }

    // O(1) -> removes from the end
    pop() {
        if (!this.head) {
            return null
        }

        const poppedNode = this.tail

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }

        this.length--
        return poppedNode
    }

    // O(1) -> adds to the front (unshift)
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

        // 5. Point the new node previous pointer to the new node
        this.head.prev = newNode

        // 6. Update the head to the new node
        this.head = newNode

        this.length++
        return this
    }

    // O(1) -> removes from the front (shift)
    shift() {
        if (!this.head) {
            return null
        }

        const currentHead = this.head

        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = currentHead.next
            this.head.prev = null
            currentHead.next = null
        }

        this.length--
        return currentHead
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
        const leader = this.get(index - 1)
        const follower = leader.next // this.traverseToIndex(index)

        // 4. Update the leader to point to the new node
        leader.next = newNode

        // 5. Point the new node to the follower's next and previous pointers
        newNode.next = follower
        newNode.prev = leader

        // 6. Point the follower previous to the new node
        follower.prev = newNode

        this.length++
        return this
    }

    // O(n)
    get(index) {
        let currentNode = this.head
        let counter = 0

        while (counter < index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    // O(n)
    set(index, value) {
        const foundNode = this.get(index)

        if (!foundNode) {
            return null
        }

        foundNode.value = value
        return foundNode
    }

    // O(n)
    delete(index) {
        // 1. Check if list is empty
        if (!this.head) {
            return null
        }

        // 3. Traverse the list and find the previous and following nodes of the specified index
        const leader = this.get(index - 1)
        const nodeToDelete = leader.next
        const follower = nodeToDelete.next

        // 4. Update the next pointer of the leader to skip the node to be deleted
        leader.next = nodeToDelete.next

        // 5. Update the previous pointer to skip the node to be deleted
        follower.prev = nodeToDelete.prev

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
