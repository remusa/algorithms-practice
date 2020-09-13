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
    // n
    // Keep track of the size of the queue
    let size = queue.length

    // Iterate through each element in the queue
    for (const current of queue) {
      // 2^n
      if (!size) break

      // Copy the current elements and append the current number
      queue.push([...current, num])

      // Decrement size
      size--
    }
  }

  return queue
}

function subsets2(nums) {
  const queue = [[]]

  for (const num of nums) {
    // n
    // Iterate through each element in the queue
    // Make a copy of the queue to freeze it
    for (const current of [...queue]) {
      // 2^n
      queue.push([...current, num])
    }
  }

  return queue
}

export { subsets, subsets2 }
