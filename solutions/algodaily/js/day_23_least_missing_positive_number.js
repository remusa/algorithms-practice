/*
    We have an unsorted array of integers such as the following:

    [-2, -1, 0, 1, 3]
    ​
    In the above example, the minimum number is -2 and the maximum is 3.

    This means there is an expected range (defined as the collection of values between the minimum and maximum values) of [-2, -1, 0, 1, 2, 3] for the array.

    But look at the example again:

    [-2, -1, 0, 1, 3]
    ​
    We're missing a number: 2. The smallest missing positive integer for our input array is 2.

    Can you write a method that takes such an array and returns the first missing positive integer?

    leastMissingPositive([1, 2, 3, 0])  // 4
*/

function leastMissingPositive(nums) {
    if (!nums || nums.length <= 1) {
        return 1
    }

    const arr = [...nums] // .sort((a, b) => a - b)

    const set = new Set()
    let max = 1

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]

        if (element > 0) {
            set.add(element)
        }

        if (element > max) {
            max = element
        }
    }

    for (let i = 1; i < max; i++) {
        if (!set.has(i)) {
            return i
        }
    }
}

module.exports = {
    leastMissingPositive,
}
