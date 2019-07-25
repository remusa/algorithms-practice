class QueueStacks {
    constructor() {
        this.first = []
        this.last = []
    }

    // O(1)
    peek() {
        if (this.last.length > 0) {
            return this.last[0]
        }
        return this.first[this.first.length - 1]
    }

    // O(n)
    // this.last holds the values
    enqueue(value) {
        // 1. Get length of the first stack
        const firstLength = this.first.length

        // 2. Walk through the first stack
        for (let i = 0; i < firstLength; i++) {
            // 3. Pop the elements from the first stack and push them to the last
            //    stack
            this.last.push(this.first.pop())
        }

        // 4. Push the new value to the last stack
        this.last.push(value)

        return this
    }

    // O(1)
    // this.first holds the values
    dequeue() {
        // 1. Get length of the last stack
        const lastLength = this.last.length

        // 2. Walk through the last stack
        for (let i = 0; i < lastLength; i++) {
            // 3. Pop all the elements from the last stack and push them to the
            //    first stack
            this.first.push(this.last.pop())
        }

        // 5. Pop the first element of the first stack
        this.first.pop()

        return this
    }
}

const myQueue = new QueueStacks()

myQueue.peek()

myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')

myQueue.peek()

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

myQueue.peek()

module.exports = {
    QueueStacks,
}
