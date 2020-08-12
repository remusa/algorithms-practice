/*
    Recall that a stack is an abstract stack type modeling a collection elements. Its primary operations are push (which adds an element to the top of the stack) and pop (which removes the most newest element).

    Traditionally, a stack can easily be implemented in Javascript and many
    other languages using an array (and its built-in methods).
*/

class MinStack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  push(val) {
    this.stack.push(val)

    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val)
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return undefined
    }

    const popped = this.stack.pop()

    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }

    return popped
  }

  peek() {
    if (this.stack.length === 0) {
      return undefined
    }

    return this.stack[this.stack.length - 1]
  }

  min() {
    if (this.minStack.length === 0) {
      return undefined
    }

    return this.minStack[this.minStack.length - 1]
  }
}

module.exports = {
  MinStack,
}
