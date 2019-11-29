const LinkedList = require('../../02_linked_lists/js/singly_linked_list')

class Queue {
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
  queue(value) {
    const newNode = new Node(value)
  }

  // O(1)
  dequeue() {
    return this.top
  }

  // O(1)
  isEmpty() {
    if (this.length === 0) {
      return true
    }
    return false
  }
}

const myQueue = new Queue()
myQueue.queue(5)
myQueue.queue(7)
myQueue.queue(9)

myQueue.dequeue()
