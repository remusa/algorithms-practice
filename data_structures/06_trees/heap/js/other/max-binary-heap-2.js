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

    return this
  }

  bubbleUp() {
    let idx = this.values.length - 1

    // Fetch the element that has to be moved
    const element = this.values[idx]

    // When at 0, an element can not go up any further
    while (idx > 0) {
      // Compute the parent element's score, and fetch it
      const parentIdx = Math.floor((idx - 1) / 2)
      const parent = this.values[parentIdx]

      // If the parent has a higher score, things are in order and we are done
      if (element <= parentIdx) {
        break
      }

      // Otherwise, swap the parent with the current element and continue
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  remove(node) {
    const length = this.values.length

    // To remove a value, we must search through the array to find it
    for (let i = 0; i < length; i++) {
      if (this.values[i] !== node) {
        continue
      }
      // When it is found, the process seen in 'pop' is repeated to fill up the hole
      const end = this.values.pop()
      // If the element we popped was the one we needed to remove, we're done.
      if (i === length - 1) break
      // Otherwise, we replace the removed element with the popped one, and allow it to float up or sink down as appropriate
      this.values[i] = end

      this.bubbleUp(i)
      this.sinkDown(i)

      break
    }
  }

  pop() {
    // Store the first element so we can return it later
    const result = this.values[0]
    // Get the element at the end of the array
    const end = this.values.pop()
    // If there are any elements left, put the end element at the start, and let it sink down
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown(0)
    }
    return result
  }

  sinkDown(n) {
    // Look up the target element and its score
    const length = this.values.length
    const element = this.values[n]
    const elemScore = Math.floor((n - 1) / 2)

    let child1Score

    while (true) {
      // Compute the indices of the child elements
      const child2N = (n + 1) * 2
      const child1N = child2N - 1

      // This is used to store the new position of the element, if any
      let swap = null

      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score
        const child1 = this.values[child1N]
        child1Score = Math.floor((child1N - 1) / 2)
        // If the score is less than our element's, we need to swap
        if (child1Score < elemScore) {
          swap = child1N
        }
      }

      // Do the same checks for the other child
      if (child2N < length) {
        const child2 = this.values[child2N]
        const child2Score = Math.floor((child2N - 1) / 2)

        if (child2Score < (swap == null ? elemScore : child1Score)) swap = child2N
      }

      // No need to swap further, we are done
      if (swap == null) break

      // Otherwise, swap and continue
      this.values[n] = this.values[swap]
      this.values[swap] = element

      n = swap
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

  console.log('heap', heap.values)

  heap.insert(55)
  console.log('heap', heap.values)

  heap.insert(45)
  console.log('heap', heap.values)

  heap.insert(1)
  console.log('heap', heap.values)

  heap.insert(199)
  console.log('heap', heap.values)
}

// example1()

module.exports = {
  MaxBinaryHeap,
}
