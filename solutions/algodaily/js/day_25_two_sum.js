/*
    This is a classic and very common interview problem. Given an array of integers, return the indices of the two numbers in it that add up to a specific goal number.

    So let's say our goal number was 10. Our numbers to sum to it would be 3 and 7, and their indices 1 and 3 respectively.

    let arr = [1, 3, 6, 7, 9];
    let goal = 10;
    twoSum(arr, goal); // [1, 3]
    ​
    You may assume that each input would have exactly one solution. Additionally, you may not use the same element twice towards the sum. This means if given [1, 3] and a goal of 2, you cannot use 1 twice and return [0, 0].
*/

// Naive solution O(n^2)
function twoSumNaive(arr, goal) {
  if (!arr || arr.length <= 1) {
    return []
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === goal) {
        return [i, j]
      }
    }
  }

  return []
}

// O(n)
function twoSum(arr, goal) {
  if (!arr || arr.length <= 1) {
    return []
  }

  const map = {}

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i
  }

  for (let i = 0; i < arr.length; i++) {
    const complement = goal - arr[i]
    if (complement in map) {
      return [i, map[complement]]
    }
  }

  return []
}

// O(n) - Using two pointers and built-in class Map
function twoSumMap(arr, goal) {
  if (!arr || arr.length <= 1) {
    return []
  }

  const map = new Map()

  let i = 0
  let j = arr.length

  while (i < j) {
    map.set(arr[i], i)
    map.set(arr[j], j)

    const difference = goal - arr[i]
    const difference2 = goal - arr[j]

    if (map.has(difference)) {
      return [map.get(difference), i]
    }
    if (map.has(difference2)) {
      return [map.get(difference2), j]
    }

    i++
    j--
  }

  return []
}

twoSumMap([1, 3, 6, 7, 9], 10)

module.exports = {
  twoSumNaive,
  twoSum,
  twoSumMap,
}
