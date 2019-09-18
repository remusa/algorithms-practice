class MaxBinaryHeap {
    constructor() {
        this.data = []
    }

    insert(value) {
        // Add the new element to the end of the array.
        this.data.push(value)
        // Allow it to bubble up.
        this.bubbleUp()
    }

    pop() {
        // Store the first element so we can return it later.
        const result = this.data[0]
        // Get the element at the end of the array.
        const end = this.data.pop()
        // If there are any elements left, put the end element at the
        // start, and let it sink down.
        if (this.data.length > 0) {
            this.data[0] = end
            this.sinkDown(0)
        }
        return result
    }

    remove(node) {
        const length = this.data.length
        // To remove a value, we must search through the array to find
        // it.
        for (let i = 0; i < length; i++) {
            if (this.data[i] !== node) continue
            // When it is found, the process seen in 'pop' is repeated
            // to fill up the hole.
            const end = this.data.pop()
            // If the element we popped was the one we needed to remove,
            // we're done.
            if (i === length - 1) break
            // Otherwise, we replace the removed element with the popped
            // one, and allow it to float up or sink down as appropriate.
            this.data[i] = end
            this.bubbleUp(i)
            this.sinkDown(i)
            break
        }
    }

    size() {
        return this.data.length
    }

    bubbleUp() {
        let i = this.data.length - 1

        // Fetch the element that has to be moved.
        const element = this.data[i]

        // When at 0, an element can not go up any further.
        while (i > 0) {
            // Compute the parent element's score, and fetch it.
            const parentIndex = Math.floor((i - 1) / 2)
            const parent = this.data[parentIndex]

            // If the parent has a lesser score, things are in order and we
            // are done.
            // element <= parentIndex
            if (parentIndex > element) {
                break
            }

            // Otherwise, swap the parent with the current element and
            // continue.
            this.data[parentIndex] = element
            this.data[i] = parent

            i = parentIndex
        }
    }

    sinkDown(n) {
        // Look up the target element and its score.
        const length = this.data.length
        const element = this.data[n]
        const elemScore = Math.floor((n - 1) / 2)

        let child1Score

        while (true) {
            // Compute the indices of the child elements.
            const child2N = (n + 1) * 2
            const child1N = child2N - 1
            // This is used to store the new position of the element,
            // if any.
            let swap = null
            // If the first child exists (is inside the array)...
            if (child1N < length) {
                // Look it up and compute its score.
                const child1 = this.data[child1N]
                child1Score = Math.floor((child1N - 1) / 2)
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore) {
                    swap = child1N
                }
            }
            // Do the same checks for the other child.
            if (child2N < length) {
                const child2 = this.data[child2N]
                const child2Score = Math.floor((child2N - 1) / 2)
                if (child2Score < (swap == null ? elemScore : child1Score)) swap = child2N
            }

            // No need to swap further, we are done.
            if (swap == null) break

            // Otherwise, swap and continue.
            this.data[n] = this.data[swap]
            this.data[swap] = element
            
            n = swap
        }
    }
}

module.exports = {
    MaxBinaryHeap,
}
