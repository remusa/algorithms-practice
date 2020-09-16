/*
1. Two Sum
Easy
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 105
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// Time complexity: O(n^2) -> naive solution
// Space complexity: O(1) -> using 2 pointers
function twoSum(nums, target) {
  const size = nums.length

  for (let i = 0; i < size; i++) {
    const num = nums[i]
    const complement = target - num

    for (let j = i + 1; j < size; j++) {
      const curr = nums[j]

      if (curr === complement) {
        return [i, j]
      }
    }
  }
}

// Time complexity: O(n) -> traverse array once, lookups in hashtable take O(1)
// Space complexity: O(n) -> number of key-value pairs, at most n
function twoSum2(nums, target) {
  const visited = {}
  const res = []

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    if (complement in visited) {
      res.push(i)
      res.push(visited[complement])
    }

    visited[num] = i
  }

  return res
}

// Time complexity: O(n) -> traverse array once, lookups in hashtable take O(1)
// Space complexity: O(n) -> n key-value pairs
function twoSum3(nums, target) {
  const map = new Map()

  // Get the complement of each num
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    // Check if we have seen the complement and get its index
    if (map.has(complement)) {
      const leftIdx = map.get(complement)
      return [leftIdx, i]
    }

    map.set(num, i)
  }
}

export { twoSum, twoSum2, twoSum3 }
