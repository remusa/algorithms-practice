/*
15. 3Sum
Medium
https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
*/

// Time complexity: O(n^3) -> triple nested loops
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

/*
Time complexity: O(n^2) -> O(nlogn + n^2) -> sorting + nested loops
Space complexity: O(n) -> size of the output
                  O(1) -> if considering sorting in-place and using pointers
*/
function threeSum2(nums) {
  if (nums.length <= 1) return []

  const triplets = []

  // Sort array -> O(log n)
  nums = nums.sort((a, b) => a - b)

  // i will be the 1st pointer and will omit the last 2 indices (where the other pointers end)
  for (let i = 0; i < nums.length - 2; i++) {
    // Initialize the pointers (2 at the start, 1 at the end)
    let left = i + 1
    let right = nums.length - 1

    // Avoid pushing already used combinations (using the first iteration)
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // Iterate until 2nd and 3rd pointers meet
    while (left < right) {
      // Calculate the sum
      const total = nums[i] + nums[left] + nums[right]

      // Total is equal to 0
      if (total === 0) {
        // Push the triplet to the array
        triplets.push([nums[i], nums[left], nums[right]])

        // Check that the outer condition is still true and if the value of the 3rd pointer is the same as the one we're currently looking at move the 3rd pointer to the left
        while (left < right && nums[right - 1] === nums[right]) {
          right--
        }

        // Check that the outer condition is still true and if the value of the 2nd pointer is the same as the one we're currently looking at move the 2nd pointer to the right
        while (left < right && nums[left + 1] === nums[left]) {
          left++
        }

        // Move the 2nd and 3rd pointers one index towards the center
        right--
        left++
      }
      // If the total is higher than 0 move the 3rd pointer to the left
      else if (total > 0) right--
      // If the total is lower than 0 move the 2nd pointer to the right
      else left++
    }
  }

  return triplets
}

export { threeSum, threeSum2 }
