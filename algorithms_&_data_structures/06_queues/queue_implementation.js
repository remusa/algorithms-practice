class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    // O(1)
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.first
    }

    // O(1)
    enqueue(value) {
        // 1. Create the new node
        const newNode = new Node(value)

        // 2. If queue is empty new node is both first and last
        if (this.isEmpty()) {
            this.first = newNode
            this.last = newNode
        }
        // 3. Queue isn't empty
        else {
            // 4. Point the penultimate element to the new node
            this.last.next = newNode
            // 5. Point the last element to the inserted one
            this.last = newNode
        }

        this.length++
        return this
    }

    // O(1)
    dequeue() {
        // 1. Check if the queue is empty
        if (this.isEmpty()) {
            return null
        }

        // 2. Save the first element
        const dequeuedNode = this.first

        // 3. If there's only 1 element in the queue
        if (this.first === this.enqueue) {
            this.first = null
            this.last = null
        }
        // 4. If there's more than 1 element in the queue
        else {
            // 5. Update the current first element to the second element
            //    (because we're removing the first one)
            this.first = this.first.next
        }

        this.length--
        return dequeuedNode
    }

    // O(1)
    isEmpty() {
        return this.length === 0
    }

    printQueue() {
        const nodes = []
        let currentNode = this.first
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        return nodes
    }

    getValues() {
        const arr = []
        this.printQueue()
            .map(node => {
                arr.push(node.value)
            })
            .toString()
        return arr
    }
}

module.exports = {
    Node,
    Queue,
}
