/*
136. Single Number
Easy
https://leetcode.com/problems/single-number/

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Time complexity: O(n) -> iterate once through the array
// Space complexity: O(1) -> math operations so no extra space needed
export function singleNumber(nums) {
  let a = 0

  for (const num of nums) {
    // If we take XOR of zero and some bit, it will return that bit
    // a⊕0 = a
    // If we take XOR of two same bits, it will return 0
    // a⊕a = 0
    // Then
    // a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
    a ^= num
  }

  // XOR all bits together to find the unique number
  return a
}

// Time complexity: O(n) -> iterate once through the array
// Space complexity: O(n) -> uses a hash map size n
export function singleNumber2(nums) {
  const map = new Map()

  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1)
  }

  for (const pair of map) {
    const [key, val] = pair

    if (val === 1) {
      return key
    }
  }

  return 0
}
