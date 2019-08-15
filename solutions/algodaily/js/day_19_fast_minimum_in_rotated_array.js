/*
    We're given an array of integers like the following:

    [0, 1, 2, 3, 4, 5, 6, 7, 8]
    ​
    We then rotate it at a random pivot so that the section after the pivot comes before. So say we put our pivot between 5 and 6:

    [6, 7, 8, 0, 1, 2, 3, 4, 5]
    ​
    Can you find the smallest element in O(log n) time? Assume that there are no repeat numbers.
*/

// O(log(n)) - Binary search
function getMinimum(arr) {
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        if (arr[start] < arr[end]) {
            return arr[start]
        }

        const mid = Math.floor((start + end) / 2)

        if (arr[start] <= arr[mid]) {
            start = mid + 1
        } else {
            end = mid
        }
    }

    return arr[start]
}

module.exports = {
    getMinimum,
}
