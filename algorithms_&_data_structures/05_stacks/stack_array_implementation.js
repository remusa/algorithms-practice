class Stack {
    constructor() {
        this.array = []
    }

    // O(1)
    peek() {
        const length = this.array.length
        return this.array[length - 1]
    }

    // O(1)
    push(value) {
        this.array.push(value)
        return this
    }

    // O(1)
    pop() {
        return this.array.pop()
    }

    printStack() {
        return this.array
    }

    getValues() {
        const arr = []
        this.array.map(value => arr.push(value))
        return arr
    }
}

module.exports = {
    Stack,
}
