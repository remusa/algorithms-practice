/*
152. Maximum Product Subarray
Medium
https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

// Time complexity: O(n) -> traverse array once
// Space complexity: O(n) -> created 2 arrays of same size as input array
function maxProduct(nums) {
    const maxTilIndex = [nums[0]]
    const minTilIndex = [nums[0]]
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]

        maxTilIndex[i] = Math.max(num, num * maxTilIndex[i - 1], num * minTilIndex[i - 1])
        minTilIndex[i] = Math.min(num, num * maxTilIndex[i - 1], num * minTilIndex[i - 1])

        max = Math.max(max, maxTilIndex[i])
    }

    return max
}

module.exports = maxProduct
