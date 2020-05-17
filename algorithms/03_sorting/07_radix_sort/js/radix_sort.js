function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
  if (num === 0) {
    return 1
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let maxDigits = 0

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }

  return maxDigits
}

function radixSort(nums) {
  // Get the maximum number of digits (3413 => 4)
  const maxDigitCount = mostDigits(nums)

  // Loop once for each digit (3413 => 4)
  for (let k = 0; k < maxDigitCount; k++) {
    // Create the 10 buckets
    const digitBuckets = Array.from({ length: 10 }, () => [])

    // Loop through every number in the array
    for (let i = 0; i < nums.length; i++) {
      const number = nums[i]

      // Figure out at position k what number we get with the current number
      const digit = getDigit(number, k)

      // Take the number that comes back and put it in its corresponding bucket
      digitBuckets[digit].push(number)
    }

    // Recollect the buckets into one array
    nums = [].concat(...digitBuckets)
  }

  return nums
}

module.exports = {
  radixSort,
}
