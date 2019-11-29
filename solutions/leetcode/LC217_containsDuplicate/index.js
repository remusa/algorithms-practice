/*
217. Contains Duplicate
Easy
https://leetcode.com/problems/contains-duplicate/

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true

Example 2:

Input: [1,2,3,4]
Output: false

Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// Time complexity: O(n) -> traverse array once, lookups in hashtable take O(1)
// Space complexity: O(n) -> number of unique values, at most n
function containsDuplicate(nums) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (map[num]) {
      return true
    }

    map[num] = true
  }

  return false
}

module.exports = containsDuplicate
