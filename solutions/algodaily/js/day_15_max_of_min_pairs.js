/*
    We have an array of length 2 * n (even length) that consists of random integers.

    [1, 3, 2, 6, 5, 4]

    We are asked to create pairs out of these integers, like such:

    [[1, 3], [2, 6], [5, 4]]

    How can we divide up the pairs such that the sum of smaller integers in each pair is maximized?

    Here's an example input: [3, 4, 2, 5]. The return value is 6 because the maximum sum of pairs is 6 = min(2, 3) + min(4, 5).

    Note that negative numbers may also be included.
*/

function maxOfMinPairs(nums) {
  if (!nums || nums.length <= 1) {
    return 0
  }

  let i = 0
  let sum = 0

  // Sort the array
  const arr = [...nums].sort((a, b) => a - b)

  // O(n) - Sum every two elements, up until the second to last
  while (i <= arr.length - 2) {
    sum += arr[i]
    i += 2
  }

  return sum
}

maxOfMinPairs([3, 4, 2, 5]) // 6
maxOfMinPairs([1, 3, 2, 6, 5, 4]) // 9

module.exports = {
  maxOfMinPairs,
}
