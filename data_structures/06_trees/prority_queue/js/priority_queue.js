class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority)

    this.values.push(newNode)
    this.bubbleUp()

    return this
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()

    if (!this.isEmpty()) {
      this.values[0] = end
      this.sinkDown()
    }

    return min
  }

  bubbleUp() {
    let i = this.values.length - 1
    const node = this.values[i]

    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2)
      const parent = this.values[parentIndex]

      if (node.priority >= parent.priority) {
        break
      }

      this.values[parentIndex] = node
      this.values[i] = parent

      i = parentIndex
    }
  }

  sinkDown() {
    let i = 0
    const { length } = this.values
    const node = this.values[0]

    while (true) {
      const leftChildIndex = 2 * i + 1
      const rightChildIndex = 2 * i + 2
      let leftChild
      let rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]

        if (leftChild.priority < node.priority) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]

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

      this.values[i] = this.values[swap]
      this.values[swap] = node
      i = swap
    }
  }

  isEmpty() {
    return this.values.length === 0
  }
}

module.exports = {
  PriorityQueue,
}
