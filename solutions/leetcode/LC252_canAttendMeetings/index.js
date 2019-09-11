/*
252. Meeting Rooms
Easy
https://leetcode.com/problems/meeting-rooms
https://leetfree.com/problems/meeting-rooms.html

Given an array of meeting time intervals consisting of start and end
times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
---------------------------
canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
canAttendMeetings([[7, 10], [2, 4]]) --> true
*/

// Time complexity: O(n) ->
// Space complexity: O(n) ->
function canAttendMeetings(intervals) {
    const starts = []
    const ends = []

    // Fill start and end arrays
    for (let i = 0; i < intervals.length; i++) {
        const subArr = intervals[i]
        starts.push(subArr[0])
        ends.push(subArr[1])
    }

    // Sort arrays
    starts.sort((a, b) => a - b)
    ends.sort((a, b) => a - b)

    // Check next start with current end
    for (let i = 0; i < starts.length; i++) {
        const nextStart = starts[i + 1]
        const currEnd = ends[i]

        if (nextStart < currEnd) {
            return false
        }
    }

    return true
}

module.exports = canAttendMeetings
