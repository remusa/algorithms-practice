/*
  912. Sort an Array
  Medium
	https://leetcode.com/problems/sort-an-array/

  Given an array of integers nums, sort the array in ascending order.

  Example 1:
    Input: nums = [5,2,3,1]
    Output: [1,2,3,5]

  Example 2:
    Input: nums = [5,1,1,2,0,0]
    Output: [0,0,1,1,2,5]

  Constraints:
    1 <= nums.length <= 50000
    -50000 <= nums[i] <= 50000
*/

/**
 * @param {number[]} nums
 * @return {number[]} nums
 */
function sortArray(nums) {
  return mergeSort(nums)
}

/*
  Time complexity: O(n log n)
  Space complexity: O(n)
*/
function mergeSort(nums) {
  // Base case
  if (nums.length <= 1) return nums

  // Split the array into 2 subarrays
  let mid = Math.floor(nums.length / 2)
  let leftArr = nums.slice(0, mid)
  let rightArr = nums.slice(mid)

  // Sort both halves recursively
  let leftSorted = mergeSort(leftArr)
  let rightSorted = mergeSort(rightArr)

  // Merge the sorted halves
  return merge(leftSorted, rightSorted)
}

function merge(left, right) {
  const sorted = []

  // Pointers to keep track of where we are in each half
  let i = 0
  let j = 0

  // Compare lowest indices of both halves and copy the smaller element into the sorted array
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i])
      i++
    } else {
      sorted.push(right[j])
      j++
    }
  }

  // One of the halves is sorted, so copy the remaining elements of the other half
  return sorted.concat(left.slice(i)).concat(right.slice(j))
}

export { sortArray }
