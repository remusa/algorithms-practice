/*
  78. Subsets
  Medium
  https://leetcode.com/problems/subsets/

  Given a set of distinct integers, nums, return all possible subsets (the power set).

  Note: The solution set must not contain duplicate subsets.

  Example:

  Input: nums = [1,2,3]
  Output:
  [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
  ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time complexity -> O(n * 2^n) = exponential
// Space complexity ->
function subsets(nums) {
  const queue = [[]]

  for (const num of nums) {
    // Iterate through each element in the original array -> O(n)
    let size = queue.length

    // Iterate through each element in the queue -> O(2 ^ n)
    for (const current of queue) {
      if (!size) break

      // Copy the current elements and append the current number
      queue.push([...current, num])

      // Decrement size
      size--
    }
  }

  return queue
}

// Time complexity -> O(n * 2^n) = exponential
// Space complexity ->
function subsets2(nums) {
  const queue = [[]]

  // Iterate through each element in the original array -> O(n)
  for (const num of nums) {
    // Iterate through each element in the queue -> O(2 ^ n)
    // Make a copy of the queue to freeze it
    for (const current of [...queue]) {
      queue.push([...current, num])
    }
  }

  return queue
}

export { subsets, subsets2 }
