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
        return this.printStack()
    }

    // O(1)
    pop() {
        this.array.pop()
        return this.printStack()
    }

    printStack() {
        return this.array
    }
}

const myStack = new Stack()
myStack.push(7)
myStack.push(3)
myStack.push(6)
console.log(myStack.printStack())

myStack.pop()
console.log(myStack.printStack())

console.log(myStack.peek())

myStack.push(8)
myStack.push(9)
myStack.push(1)
console.log(myStack.printStack())

myStack.pop()
console.log(myStack.printStack())
myStack.pop()
console.log(myStack.printStack())
