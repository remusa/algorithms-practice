/*
1. Two Sum
Easy
https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// Time complexity: O(n) -> traverse array once, lookups in hashtable take O(1)
// Space complexity: O(n) -> number of key-value pairs, at most n
function twoSum(arr, target) {
    const visited = {}
    const res = []

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        const complement = target - num

        if (visited[complement] !== undefined) {
            res.push(i)
            res.push(visited[complement])
        }

        visited[num] = i
    }

    return res
}

module.exports = twoSum
