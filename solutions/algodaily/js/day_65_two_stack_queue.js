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
        return this.input
    }

    dequeue() {
        if (this.output.length === 0) {
            while (this.input.length !== 0) {
                this.output.push(this.input.pop())
            }
        }

        return this.output.pop()
    }
}

TwoStackQueue.prototype.push = TwoStackQueue.prototype.enqueue
TwoStackQueue.prototype.pop = TwoStackQueue.prototype.dequeue

module.exports = {
    TwoStackQueue,
}
