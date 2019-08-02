/*
    Assume we're given an unsorted array of numbers such as this:

    [ 2, 5, 1, 4, 9, 6, 3, 7 ]

    We are told that there are a series of n consecutive numbers, with a lower bound and upper bound.

    There is one consecutive number missing. In this case, if the lower bound is 1 and the upper bound is 9, it's 8.
*/

// O
function missingInUnsorted(arr, lowerBound, upperBound) {
    return arr
}

const arr = [2, 5, 1, 4, 9, 6, 3, 7]
const lowerBound = 1
const upperBound = 9

missingInUnsorted(arr, lowerBound, upperBound) // 8

module.exports = {
    missingInUnsorted,
}
