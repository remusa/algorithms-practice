/*
    Suppose we're given an array of numbers like the following:

    [4, 2, 4]

    Could you find the majority element? A majority is defined as "the greater part, or more than half, of the total. It is a subset of a set consisting of more than half of the set's elements."

    Let's assume that the array length is always at least one, and that there's always a majority element.

    In the example above, the majority element would be 4.
*/

// O(n)
function majorityElement(array) {
  const numbers = {}

  // O(n)
  array.forEach(element => {
    if (element in numbers) {
      numbers[element]++
    } else {
      numbers[element] = 1
    }
  })

  // {"1":1,"2":1,"3":1,"4":4}

  let max = null
  // O(n)
  for (const key in numbers) {
    if (!max) {
      max = key
    } else if (numbers[key] > numbers[max]) {
      max = key
    }
  }

  return parseInt(max)
}

// O(n log(n)) -> log (n) depending on the sorted algorithm
// if we sort an array of numbers, the majority element will represent at least 50% of the elements, so it will always end up at the Math.floor(nums.length / 2)th index.
function majorityElement2(array) {
  const sorted = [...array].sort()
  const midIndex = Math.floor(array.length / 2)
  const max = sorted[midIndex]

  return max
}

console.log(majorityElement2([1, 4, 2, 4, 4, 3, 4])) // 4
console.log(majorityElement2([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])) // 1

module.exports = {
  majorityElement,
  majorityElement2,
}
