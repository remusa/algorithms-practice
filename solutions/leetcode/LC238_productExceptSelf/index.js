/*
238. Product of Array Except Self
Medium
https://leetcode.com/problems/product-of-array-except-self/

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

// Time complexity: O(n) -> traverse array thrice (no nested loops)
// Space complexity: O(1) -> output array doesn't count as extra space for the purpose of space complexity analysis
function productExceptSelf(nums) {
    const output = nums.map(n => 1)
    let product = 1

    // Multiply from the left
    for (let i = 0; i < nums.length; i++) {
        output[i] *= product
        product *= nums[i]
    }

    product = 1

    // Multiply from the right
    for (let j = nums.length - 1; j >= 0; j--) {
        output[j] *= product
        product *= nums[j]
    }

    return output
}

module.exports = productExceptSelf
