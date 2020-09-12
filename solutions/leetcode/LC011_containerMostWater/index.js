/*
11. Container With Most Water
Medium
https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.



The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.



Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

// Time complexity: O(n) -> traverse array once
// Space complexity: O(1) -> use 2 pointers
function maxArea(height) {
  let maxArea = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    // Smallest wall height stops the water from spilling
    const smallestWall = Math.min(height[left], height[right])

    // Width of the base
    const base = right - left

    // Area = height * width
    const currentArea = smallestWall * base

    // Calculate maxArea
    maxArea = Math.max(currentArea, maxArea)

    // Shift walls
    const leftWall = height[left]
    const rightWall = height[right]

    if (leftWall < rightWall) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}

module.exports = maxArea
