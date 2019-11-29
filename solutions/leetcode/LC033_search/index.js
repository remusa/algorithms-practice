/*
33. Search in Rotated Sorted Array
Medium
https://leetcode.com/problems/search-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

function findMinIndex(rotatedSortedArr) {
  let left = 0
  let right = rotatedSortedArr.length - 1

  if (rotatedSortedArr.length === 1) {
    return 0
  }

  // If left < right then array isn't rotated. Return the first index since it's sorted
  if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
    return 0
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    const leftVal = rotatedSortedArr[left]
    const midVal = rotatedSortedArr[mid]
    const leftOfMid = rotatedSortedArr[mid - 1]
    const rightOfMid = rotatedSortedArr[mid + 1]

    // Check inflection point (mid)
    if (midVal < leftOfMid) {
      return mid
    }
    if (midVal > rightOfMid) {
      return mid + 1
    }

    if (midVal < leftVal) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
}

function binarySearch(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid
    }

    if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

// Time complexity: O(log(n)) -> performed multiple binary searches
// Space complexity: O(1)
function search(nums, target) {
  const midIndex = findMinIndex(nums)

  const left = binarySearch(nums, target, 0, midIndex)
  const right = binarySearch(nums, target, midIndex, nums.length - 1)

  return Math.max(left, right)
}

module.exports = search
