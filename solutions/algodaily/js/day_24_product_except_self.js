/*
    If we are given an array of integers, can you return an output array such that each corresponding input's elements returns the product of the input array except itself?

    This can be hard to explain, so let's take an array: [1, 2, 4, 16]

    What we want to return is [128, 64, 32, 8]. This is because 2 x 4 x 16 = 128, 1 x 4 x 16 = 64, 1 x 2 x 16 = 32, and 1 x 2 x 4 = 8.

    In other words, output[i] is equal to the product of all the elements in the array other than input[i].

    Can you solve this in O(n) time without division?
*/

// O(n^2)
function productExceptSelfNaive(nums) {
  if (!nums || nums.length <= 1) {
    return []
  }

  const results = []

  for (let i = 0; i < nums.length; i++) {
    let product = 1

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j]
      }
    }

    results.push(product)
  }

  return results
}

// Time complexity: O(n)
// Space complexity: O(1) -> we don't use an additional array for computations and the answer array doesn't count
function productExceptSelf(nums) {
  if (!nums || nums.length <= 1) {
    return []
  }

  const results = []
  const length = nums.length

  let left = 1

  for (let i = 0; i < length; i++) {
    results[i] = left
    // left keeps track of the product
    left *= nums[i]
  }

  // results[i] contains the product of all the elements to the left
  // results[0] = 1
  // results[i] = nums[i - 1] * results[i - 1]

  let right = 1

  for (let j = length - 1; j >= 0; j--) {
    results[j] *= right
    right *= nums[j]
  }

  return results
}

export { productExceptSelfNaive, productExceptSelf }
