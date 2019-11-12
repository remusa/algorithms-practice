/*
    Implement Stack using Two Queues:

    Given two queues with their standard operations (enqueue, dequeue, isempty, size), implement a stack with its standard operations (pop, push, isempty, size).

    There should be two versions of the solution.

        Version A: The stack should be efficient when pushing an item; and
        Version B: The stack should be efficient when popping an item.


    https://stackoverflow.com/questions/688276/implement-stack-using-two-queues
    https://cstheory.stackexchange.com/questions/2562/one-stack-two-queues/2589#2589
    https://stackoverflow.com/questions/3518206/stack-using-two-queues
*/

class QueueStack {
    constructor() {
        this.queue = []
    }

    peek() {
        if (!this.queue) {
            return null
        }

        const firstValue = this.queue[0]
        console.log('queue', this.queue)
        console.log('peek', firstValue)
        return firstValue
    }

    // Version A: efficient push
    push(value) {
        this.queue.push(value)
    }

    // Version A: inefficient pop
    pop() {
        if (!this.queue.length) {
            return null
        }

        let i = this.queue.length
        while (i > 0) {
            const dequeue = this.queue.shift()
            this.queue.push(dequeue)
            i--
        }

        const popped = this.queue.shift()
        console.log('popped', popped)
        return popped
    }

    // Version b: inefficient push
    pushB(value) {
        this.queue.push(value)

        let i = this.queue.length
        while (i > 0) {
            const dequeue = this.queue.shift()
            this.queue.push(dequeue)
            i--
        }
    }

    // Version b: efficient pop
    popB() {
        if (!this.queue.length) {
            return null
        }

        const popped = this.queue.shift()
        console.log('popped', popped)
        return popped
    }
}

const myQueue = new QueueStack()

myQueue.pushB('Joy')
myQueue.pushB('Matt')
myQueue.pushB('Pavel')

myQueue.peek()

myQueue.popB()
myQueue.peek()

myQueue.popB()
myQueue.peek()

myQueue.popB()
myQueue.peek()

module.exports = {
    QueueStack,
}
