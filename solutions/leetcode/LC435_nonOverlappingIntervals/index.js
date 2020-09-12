/*
435. Non-overlapping Intervals
Medium
https://leetcode.com/problems/non-overlapping-intervals/

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.



Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Example 2:

Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

Example 3:

Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.



Note:

    You may assume the interval's end point is always bigger than its start point.
    Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
*/

// Time complexity: O(n*log(n)) -> use of a sorting algorithm
// Space complexity: O(1) -> sort the input array in place
function eraseOverlapIntervals(intervals) {
  if (!intervals.length) return 0

  // Count the number of removals
  let count = 0

  // Sort by starting interval times
  intervals.sort((a, b) => a[0] - b[0])

  // Previous interval end time
  let end = intervals[0][1]

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i]
    const intervalStart = interval[0]
    const intervalEnd = interval[1]

    // Check if there's an intersection (remove an interval)
    if (intervalStart < end) {
      count++
      end = Math.min(intervalEnd, end)
    }
    // no removals made
    else {
      end = intervalEnd
    }
  }

  return count
}

module.exports = eraseOverlapIntervals
