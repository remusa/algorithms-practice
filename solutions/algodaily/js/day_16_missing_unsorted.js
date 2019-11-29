/*
    Assume we're given an unsorted array of numbers such as this:

    [ 2, 5, 1, 4, 9, 6, 3, 7 ]

    We are told that there are a series of n consecutive numbers, with a lower bound and upper bound.

    There is one consecutive number missing. In this case, if the lower bound is 1 and the upper bound is 9, it's 8.
*/

// O(n)
function missingInUnsorted(arr, lowerBound, upperBound) {
  const map = {}

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = arr[i]
  }

  for (let i = lowerBound; i <= upperBound; i++) {
    const inMap = i.toString() in map
    if (!inMap) {
      return i
    }
  }
}

missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9) // 8

module.exports = {
  missingInUnsorted,
}
