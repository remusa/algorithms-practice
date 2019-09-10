/*
70. Climbing Stairs
Easy
https://leetcode.com/problems/climbing-stairs/

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// Time complexity: O(n) -> loop n times
// Space complexity: O(n) -> size of array is n
function climbStairs(n) {
    if (n <= 3) {
        return n
    }

    const ways = [0, 1, 2, 3]

    for (let i = 4; i <= n; i++) {
        ways.push(ways[i - 2] + ways[i - 1])
    }

    return ways.pop()
}

// Time complexity: O(n) -> loop n times
// Space complexity: O(1) -> no additional data structure
function climbStairsO1(n) {
    if (n === 1) {
        return n
    }

    let first = 1
    let second = 2

    for (let i = 3; i <= n; i++) {
        const third = first + second
        first = second
        second = third
    }

    return second
}

module.exports = climbStairs
