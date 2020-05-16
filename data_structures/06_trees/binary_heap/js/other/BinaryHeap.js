// based off http://eloquentjavascript.net/1st_edition/appendix2.html

function MaxBinaryHeap() {
  this.values = []
}

MaxBinaryHeap.prototype = {
  insert(element) {
    this.values.push(element)
    this.bubbleUp(this.values.length - 1)
  },

  remove() {
    const result = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown(0)
    }
    return result
  },

  innerRemove(node = this.values[this.values.length - 1]) {
    const length = this.values.length
    // To remove a value, we must search through the array to find
    // it.
    for (let i = 0; i < length; i++) {
      if (this.values[i] != node) continue
      // When it is found, the process seen in 'pop' is repeated
      // to fill up the hole.
      const end = this.values.pop()
      // If the element we popped was the one we needed to remove,
      // we're done.
      if (i == length - 1) break
      // Otherwise, we replace the removed element with the popped
      // one, and allow it to float up or sink down as appropriate.
      this.values[i] = end
      this.bubbleUp(i)
      this.sinkDown(i)
      break
    }
  },

  size() {
    return this.values.length
  },

  bubbleUp(n) {
    // Fetch the element that has to be moved.
    const element = this.values[n]
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      const parentN = Math.floor((n + 1) / 2) - 1
      const parent = this.values[parentN]
      // If the parent has a lesser score, things are in order and we
      // are done.
      if (element <= parent) break

      // Otherwise, swap the parent with the current element and
      // continue.
      this.values[parentN] = element
      this.values[n] = parent
      n = parentN
    }
  },

  sinkDown(n) {
    // Look up the target element and its score.
    const length = this.values.length
    const element = this.values[n]

    while (true) {
      // Compute the indices of the child elements.
      const child2N = (n + 1) * 2
      const child1N = child2N - 1
      // This is used to store the new position of the element,
      // if any.
      let swap = null
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = this.values[child1N]
        // If the score is less than our element's, we need to swap.
        if (child1 > element) swap = child1N
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        const child2 = this.values[child2N]
        if (child2 > (swap == null ? element : child1)) swap = child2N
      }

      // No need to swap further, we are done.
      if (swap == null) break

      // Otherwise, swap and continue.
      this.values[n] = this.values[swap]
      this.values[swap] = element
      n = swap
    }
  },
}

function maxHeapify(input) {
  for (let i = Math.floor(input.length / 2); i >= 0; i--) {
    innerHeapify(input, i)
  }
  return input
}

function innerHeapify(input, i) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let largest = i

  if (left < input.length && input[left] > input[largest]) {
    largest = left
  }

  if (right < input.length && input[right] > input[largest]) {
    largest = right
  }

  if (largest !== i) {
    ;[input[i], input[largest]] = [input[largest], input[i]]
    innerHeapify(input, largest)
  }
}
