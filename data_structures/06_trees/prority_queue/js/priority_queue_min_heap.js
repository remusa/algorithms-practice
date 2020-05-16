class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

// Using a min heap (lower number means higher priority)
class PriorityQueueMinHeap {
  constructor() {
    this.values = []
  }

  enqueue(item, priority = 0) {
    const newNode = new Node(item, priority)

    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    // Start at the last value (lowest priority)
    let idx = this.size() - 1
    const element = this.values[idx]

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      const parent = this.values[parentIdx]

      // If the current element has a lower number (higher priority) than it's parent then we're done
      if (element.priority >= parent.priority) {
        break
      }

      // Swap values
      this.values[parentIdx] = element
      this.values[idx] = parent

      // Continue loop
      idx = parentIdx
    }
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()

    if (this.size() > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return min
  }

  sinkDown() {
    let i = 0
    const length = this.size()
    const element = this.values[0]

    while (true) {
      const leftChildIndex = 2 * i + 1
      const rightChildIndex = 2 * i + 2
      let leftChild
      let rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]

        if (leftChild.priority < element.priority) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) {
        break
      }

      this.values[i] = this.values[swap]
      this.values[swap] = element
      i = swap
    }
  }

  size() {
    return this.values.length
  }
}

module.exports = {
  PriorityQueueMinHeap,
}
