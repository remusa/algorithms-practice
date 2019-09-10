/*
55. Jump Game
Medium
https://leetcode.com/problems/jump-game/

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
*/

// Time complexity: O(n^2) -> nested for loops
// Space complexity: O(n) -> second array same size as input array
function canJump(nums) {
    const positions = new Array(nums.length).fill(false)

    positions[0] = true

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (positions[i] && i + nums[i] >= j) {
                positions[j] = true
                break
            }
        }
    }

    return positions[positions.length - 1]
}

module.exports = canJump
