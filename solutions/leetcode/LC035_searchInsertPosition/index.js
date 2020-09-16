/*
35. Search Insert Position
Easy
https://leetcode.com/problems/search-insert-position/

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

// Time complexity: O(log n) -> each step cuts size of the array in half
// Space complexity: O(1) -> uses 2 pointers
function searchInsert(nums, target) {
  let start = 0
  let end = nums.length - 1

  // Let the pointers meet in the final iteration if target wasn't found
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const midItem = nums[mid]

    // If the target is found, return its index
    if (midItem === target) return mid
    // If mid is smaller than the target, move start by 1 index
    if (midItem < target) {
      start = mid + 1
    }
    // If mid is greater than the target, move end by 1 index
    else {
      end = mid - 1
    }
  }

  // If we didn't find the item then it should be in the start pointer (start === end)
  return start
}

export { searchInsert }
