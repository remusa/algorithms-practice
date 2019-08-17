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
        // 1. Push the value to the input stack
        this.input.push(value)
        return this.input
    }

    dequeue() {
        // 1. Check that there's at least one element
        if (this.output.length === 0 && this.input.length === 0) {
            return undefined
        }

        // 2. Reverse the stack
        // If output is empty
        if (this.output.length === 0) {
            // And input has elements
            while (this.input.length) {
                // Reverse the stack by popping elements in input and
                // pushing them to output
                this.output.push(this.input.pop())
            }
        }

        // 3. Pop the first element in the stack (last one in the output
        // because the stack has been reversed)
        // console.log('popped', this.output[this.output.length - 1])
        return this.output.pop()
    }
}

TwoStackQueue.prototype.push = TwoStackQueue.prototype.enqueue
TwoStackQueue.prototype.pop = TwoStackQueue.prototype.dequeue

module.exports = {
    TwoStackQueue,
}
