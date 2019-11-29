/*
    A circular array is one where the next element of the last element is the first element:

    Instead of [1, 2, 3, 4], imagine the following, where after index 7, we'd move back to index 0.

    Can you write a method nextLargerNumber(nums: array) to print the next immediate larger number for every element in the array? Note: for any element within the circular array, the next immediate larger number could be found circularly-- past the end and before it. If there is no number greater, return -1.

    Take the following analysis for each index:

    nextLargerNumber([3, 1, 3, 4])
    - [4, 3, 4, -1]
    - 3's next greater is 4
    - 1's next greater is 3
    - 3's next greater is 4 again
    - 4 will look to the beginning, but find nothing, so -1
*/

function nextLargerNumber(nums) {
  const stack = []
  const result = []

  // 1. Fill the results array with -1
  for (let j = 0; j < nums.length; j++) {
    result.push(-1)
  }

  // 2. Iterate twice through the array
  for (let i = 0; i < nums.length * 2; i++) {
    const curr = nums[i % nums.length]

    // 3. While there's elements in the stack
    while (stack.length && nums[stack[stack.length - 1]] < curr) {
      // 4. Pop the smallest element from the stack
      const smallest = stack.pop()
      // 5. The current number is the smallest
      result[smallest] = curr
    }

    if (i < nums.length) {
      stack.push(i)
    }
  }

  result[result.length - 1] = -1

  console.log('result', result)
  return result
}

nextLargerNumber([3, 1, 3, 4]) // [4, 3, 4, -1]
// nextLargerNumber([4, 5, 2, 25]) // [5, 25, 25, -1]
// nextLargerNumber([13, 7, 6, 12]) // [-1, 12, 12, -1]
// nextLargerNumber([98, 23, 54, 12, 20, 7, 27]) // [-1, 54, 98, 20, 27, 27, -1]

module.exports = {
  nextLargerNumber,
}
