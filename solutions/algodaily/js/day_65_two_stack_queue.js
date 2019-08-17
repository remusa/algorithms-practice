/*
    Can you implement a queue using two stacks? The following method should work:

    const tsq = new TwoStackQueue();
    tsq.push(1);
    tsq.push(2);
    tsq.pop();  // 1
    tsq.pop();  // 2
*/

class TwoStackQueue {
    constructor() {
        this.input = []
        this.output = []
    }

    enqueue(value) {
        this.input.push(value)
        // console.log('this.input', this.input)
    }

    dequeue() {
        if (this.output.length === 0) {
            while (this.input.length !== 0) {
                this.output.push(this.input.pop())
            }
        }
        const popped = this.output.pop()
        // console.log('popped', popped)
        // console.log('this.output', this.output)
        return popped
    }
}

TwoStackQueue.prototype.push = TwoStackQueue.prototype.enqueue
TwoStackQueue.prototype.pop = TwoStackQueue.prototype.dequeue

const tsq = new TwoStackQueue()
tsq.push(1)
tsq.push(2)
tsq.pop() // 1
tsq.pop() // 2
tsq.push(5)
tsq.push(6)
tsq.push(7)
tsq.pop() // 5
tsq.pop() // 6
tsq.push(8)
tsq.pop() // 7

module.exports = {
    TwoStackQueue,
}
