const linkedList = require('../../02_linked_lists/js/singly_linked_list')

const { Node } = linkedList
const { SinglyLinkedList } = linkedList

class Stack {
  constructor() {
    this.linkedList = new SinglyLinkedList()
  }

  // O(1)
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.top
  }

  // O(1)
  push(value) {
    // 1. Create new node
    const newNode = new Node(value)

    // 2. If stack is empty then the new element is both top and bottom
    if (this.isEmpty()) {
      this.top = newNode
      this.bottom = newNode
    } else {
      // 3. Point the node below to the current top
      const previousTop = this.top
      // 4. Point the top to the new node
      this.top = newNode
      // 5. Update the new top next pointer to the previous top
      this.top.next = previousTop
    }

    this.length++
    return this
  }

  // O(1)
  pop() {
    // 1. Check if the stack is empty
    if (this.isEmpty()) {
      return null
    }

    // 2. Pop the top element
    const poppedNode = this.top

    // 3. If there's only one element in the stack
    if (this.top === this.bottom) {
      this.top = null
      this.bottom = null
    }
    // 4. There's more than 1 element in the stack
    else {
      // 5. Update the current top to the the element below it
      this.top = this.top.next
    }

    this.length--
    return poppedNode
  }

  // O(1)
  isEmpty() {
    return this.length === 0
  }

  printStack() {
    const nodes = []
    let currentNode = this.top
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }
    return nodes
  }

  getValues() {
    const arr = []
    this.printStack()
      .map(node => {
        arr.push(node.value)
      })
      .toString()
    return arr
  }
}

// const myStack = new Stack()

// myStack.push(7)
// myStack.push(3)
// myStack.push(6)
// console.log(myStack.getValues())

// console.log(`PEEK: ${myStack.peek()}`)

// console.log(`POPPED: ${Object.entries(myStack.pop())}`)
// console.log(myStack.printStack())
// console.log(`POPPED: ${Object.entries(myStack.pop())}`)
// console.log(myStack.printStack())
// console.log(`POPPED: ${Object.entries(myStack.pop())}`)
// console.log(myStack.printStack())

// console.log(myStack)

// myStack.push(8)
// myStack.push(9)
// myStack.push(1)
// console.log(myStack.printStack())

// console.log(`POPPED: ${Object.entries(myStack.pop())}`)
// console.log(myStack.printStack())
// console.log(`POPPED: ${Object.entries(myStack.pop())}`)
// console.log(myStack.printStack())

// console.log(myStack)

module.exports = {
  Stack,
}
