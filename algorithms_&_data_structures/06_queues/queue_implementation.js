class Queue {
    constructor() {
        this.first = null
        this.last = null
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
    queue(value) {
        const newNode = new Node(value)
    }

    // O(1)
    dequeue() {
        return this.top
    }

    // O(1)
    isEmpty() {
        if (this.length === 0) {
            return true
        }
        return false
    }
}

const myQueue = new Queue()
myQueue.queue(5)
myQueue.queue(7)
myQueue.queue(9)

myQueue.dequeue()
