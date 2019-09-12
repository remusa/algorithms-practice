/*
15. 3Sum
Medium
https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
    [-1, 0, 1],
    [-1, -1, 2]
]
*/

// Time complexity: O(n^2) -> iterate over all the numbers two times
// Space complexity: O(1) ->
function threeSum(nums) {
    // O(log(n))
    nums.sort((a, b) => a - b)
    const res = []

    for (let i = 0; i < nums.length; i++) {
        const target = 0 - nums[i]
        let left = i + 1
        let right = nums.length - 1

        // Check to avoid pushing duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[i], nums[left], nums[right]])
                left++

                while (nums[left] === nums[left - 1]) {
                    left++
                }
            } else if (nums[left] + nums[right] < target) {
                left++
            } else {
                right--
            }
        }
    }

    return res
}

module.exports = threeSum
