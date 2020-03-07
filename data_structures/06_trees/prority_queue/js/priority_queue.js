class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(item, priority = 0) {
    const newNode = new Node(item, priority)

    this.items.push(newNode)
    this.bubbleUp()

    return this
  }

  dequeue() {
    const min = this.items[0]
    const end = this.items.pop()

    if (!this.isEmpty()) {
      this.items[0] = end
      this.sinkDown()
    }

    return min
  }

  bubbleUp() {
    let i = this.items.length - 1
    const node = this.items[i]

    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2)
      const parent = this.items[parentIndex]

      if (node.priority >= parent.priority) {
        break
      }

      this.items[parentIndex] = node
      this.items[i] = parent

      i = parentIndex
    }
  }

  sinkDown() {
    let i = 0
    const { length } = this.items
    const node = this.items[0]

    while (true) {
      const leftChildIndex = 2 * i + 1
      const rightChildIndex = 2 * i + 2
      let leftChild
      let rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.items[leftChildIndex]

        if (leftChild.priority < node.priority) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.items[rightChildIndex]

        if (
          (swap === null && rightChild.priority < node.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) {
        break
      }

      this.items[i] = this.items[swap]
      this.items[swap] = node
      i = swap
    }
  }

  isEmpty() {
    return this.items.length === 0
  }
}

module.exports = {
  PriorityQueue,
}
