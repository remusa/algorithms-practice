/*
153. Find Minimum in Rotated Sorted Array
Medium
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2]
Output: 1

Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
*/

// Time complexity: O(log(n)) -> performed binary search
// Space complexity: O(1)
function findMin(nums) {
    let left = nums[0]
    let right = nums.length - 1

    if (nums.length === 1) {
        return nums[0]
    }

    // If left < right then array isn't rotated
    if (nums[left] < nums[right]) {
        return nums[left]
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        const leftVal = nums[left]
        const midVal = nums[mid]
        const leftOfMid = nums[mid - 1]
        const rightOfMid = nums[mid + 1]

        // Check inflection point (mid)
        if (midVal > rightOfMid) {
            return rightOfMid
        }

        if (midVal < leftOfMid) {
            return midVal
        }

        if (midVal > leftVal) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
}

module.exports = findMin
