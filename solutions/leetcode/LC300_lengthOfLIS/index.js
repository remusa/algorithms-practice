/*
300. Longest Increasing Subsequence
Medium
https://leetcode.com/problems/longest-increasing-subsequence/

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Note:

    There may be more than one LIS combination, it is only necessary for you to return the length.
    Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?
*/

// Time complexity: O(n^2) -> do n work, for all n elements
// Space complexity: O(n) -> store the answer up to n sub-problems
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0

  const lis = new Array(nums.length).fill(1)
  let maxSoFar = 1

  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        const currSubsequence = lis[i] + 1
        const prevSubsequence = lis[j]

        lis[j] = Math.max(currSubsequence, prevSubsequence)
      }
    }

    maxSoFar = Math.max(maxSoFar, lis[j])
  }

  return maxSoFar
}

module.exports = lengthOfLIS
