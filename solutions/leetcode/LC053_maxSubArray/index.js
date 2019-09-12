/*
53. Maximum Subarray
Easy
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

// Time complexity: O(n) -> traverse array once
// Space complexity: O(n) -> create another array
function maxSubArray(nums) {
    let max = nums[0]
    const dp = []
    dp.push(max)

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]

        dp[i] = Math.max(num, num + dp[i - 1])
        max = Math.max(max, dp[i])
    }

    return max
}

// Time complexity: O(n) -> traverse array once
// Space complexity: O(1) -> modify array in place
function maxSubArray2(nums) {
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]

        nums[i] = Math.max(num, num + nums[i - 1])
        max = Math.max(max, nums[i])
    }

    return max
}

module.exports = maxSubArray
