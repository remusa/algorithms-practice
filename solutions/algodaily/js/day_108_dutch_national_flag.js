/*
    This problem is named the "Dutch national flag problem" because the flag of the Netherlands is comprised of the colors red, white, and blue in separate parts. Although we won't be using colors, the premise of the challenge is to develop a sorting algorithm that performs some form of separations of three kinds of elements.

    To simplify things, we'll use 0s, 1s, and 2s.

    Given an array consisting of only 0s, 1s, and 2s, sort the elements in linear time and constant space.

    const arr = [2, 0, 1, 0, 2]
    dutchNatFlag(arr)   // [0, 0, 1, 2, 2]

    https://algodaily.com/challenges/dutch-national-flag-problem
*/

function swap(arr, first, second) {
  const temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}

// Time complexity: O(n) -> iterate twice through the array
function dutchNatFlag(array) {
  const arr = [...array]

  // Use 3 pointers to divide the array into 4 parts: red, white, unknown and blue
  // Elements are taken from the unknown part and put into its right place (unknown shrinks while the other 3 parts expand)
  let low = 0
  let mid = 0
  let high = arr.length - 1

  // Iterate through each element in the array
  while (mid <= high) {
    const element = arr[mid]

    // When element at mid is 0, swap element at mid with element at low and increment mid and low
    if (element === 0) {
      swap(arr, low, mid)
      low++
      mid++
    }
    // If element is 1 is just increment mid by 1
    else if (element === 1) {
      mid++
    }
    // If element at mid is 2, swap element at reader with element at high and decrease high by 1
    else if (element === 2) {
      swap(arr, mid, high)
      high--
    }
  }

  return arr
}

module.exports = {
  dutchNatFlag,
}
