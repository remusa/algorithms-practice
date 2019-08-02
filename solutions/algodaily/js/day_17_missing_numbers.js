/*
    Assume we're given an unsorted array of numbers such as this:

    [ 2, 5, 1, 4, 9, 6, 3, 7 ]

    We are told that there are a series of n consecutive numbers, with a lower bound and upper bound.

    There is one consecutive number missing. In this case, if the lower bound is 1 and the upper bound is 9, it's 8.
*/

// O(n)
function missingNumbers(arr) {
    const missing = []

    // start at second element
    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1]
        const curr = arr[i]

        if (curr - prev === 2) {
            missing.push(curr - 1)
        } else if (curr - prev >= 2) {
            for (let j = prev + 1; j < curr; j++) {
                missing.push(j)
            }
        }
    }

    return missing
}

// missingNumbers([1, 2, 4, 5, 7]) // [3, 6]
missingNumbers([10, 11, 14, 17]) // [12, 13, 15, 16]

module.exports = {
    missingNumbers,
}
