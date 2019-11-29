class Stack {
  constructor() {
    this.data = []
  }

  // O(1)
  peek() {
    const length = this.data.length
    return this.data[length - 1]
  }

  // O(1)
  push(value) {
    this.data.push(value)
    return this
  }

  // O(1)
  pop() {
    return this.data.pop()
  }

  printStack() {
    return this.data
  }

  getValues() {
    const arr = []
    this.data.map(value => arr.push(value))
    return arr
  }
}

module.exports = {
  Stack,
}
