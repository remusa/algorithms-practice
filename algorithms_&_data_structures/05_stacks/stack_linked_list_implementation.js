class Stack {
    constructor() {
        this.top = null
        this.bottom = null
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
    push(value) {
        const newNode = new Node(value)
    }

    // O(1)
    pop() {}

    // O(1)
    isEmpty() {
        if (this.length === 0) {
            return true
        }
        return false
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
