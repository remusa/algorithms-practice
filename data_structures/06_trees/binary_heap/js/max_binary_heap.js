class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  size() {
    return this.values.length
  }

  insert(value) {
    // Add the new element to the end of the array
    this.values.push(value)
    // Allow it to bubble up
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.size() - 1

    // Fetch the element that has to be moved
    const element = this.values[idx]

    // When at 0, an element can not go up any further
    while (idx > 0) {
      // Compute the parent element's score, and fetch it
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      // If the parent has a higher score, things are in order and we are done
      if (element <= parent) {
        break
      }

      // Otherwise, swap the parent with the current element and continue
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  extractMax() {
    // Store the max element (first) so we can return it later
    const max = this.values[0]

    // Get the element at the end of the array
    const end = this.values.pop()

    // If there are any elements left, move the end element to the start, and let it sink down
    if (this.size() > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return max
  }

  // Start at the root by default
  sinkDown(n = 0) {
    // Look up the target element and its index
    let idx = 0
    const length = this.size()
    const element = this.values[0]

    while (true) {
      // Find the indices of the child elements
      const leftChildIdx = 2 * idx + 1
      const rightChildIdx = 2 * idx + 2

      let leftChild
      let rightChild

      // This is used to store the new position of the element, if any
      // Keep track of whether we did any swaps in this loop
      let swap = null

      // If the left child exists
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]

        // Swap if we find an element larger
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }

      // If the right child exists
      if (rightChildIdx < length) {
        // Look it up and find its indx
        rightChild = this.values[rightChildIdx]

        // Swap if we find an element larger and we haven't already swapped with left child
        // or swap if the right child is greater than the left child
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }

      // If no swaps were done, we are done
      if (swap === null) {
        break
      }

      // Otherwise, swap
      this.values[idx] = this.values[swap]
      this.values[swap] = element

      // Update the index and continue the loop
      idx = swap
    }
  }

  remove(node) {
    const length = this.size()

    // To remove a value, we must search through the values to find it
    for (let idx = 0; idx < length; idx++) {
      if (this.values[idx] !== node) {
        continue
      }

      // When it is found, the process seen in 'pop' is repeated to fill up the hole
      const end = this.values.pop()

      // If the element we popped was the one we needed to remove, we're done
      if (idx === length - 1) {
        break
      }

      // Otherwise, we replace the removed element with the popped one, and allow it to float up or sink down as appropriate
      this.values[idx] = end

      this.bubbleUp()
      this.sinkDown()

      break
    }
  }
}

function example1() {
  const heap = new MaxBinaryHeap()

  heap.insert(41)
  heap.insert(39)
  heap.insert(33)
  heap.insert(18)
  heap.insert(27)
  heap.insert(12)
  heap.insert(55)
  console.log(`heap`, heap.values)

  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
  console.log(heap.extractMax())
  console.log(`heap`, heap.values)
}

// example1()

module.exports = {
  MaxBinaryHeap,
}
