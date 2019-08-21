/*
    Write a method that moves all zeros in an array to its end. You should maintain the order of all other elements. Here's an example:

    zerosToEnd([1, 0, 2, 0, 4, 0] // [1, 2, 4, 0, 0, 0]
    ​
    And another one:

    zerosToEnd([1, 0, 2, 0, 4, 0] // [1, 2, 4, 0, 0, 0]
    ​
    Fill in the following function signature:

    function zerosToEnd(nums) {
        return;
    };
    ​
    Can you do this without instantiating a new array?
*/

// Uses O(n) extra space for new array
function zerosToEndNaive(nums) {
    if (!nums || nums.length <= 1) {
        return nums
    }

    const arr = []
    let zeros = 0

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]

        if (element === 0) {
            zeros++
        } else {
            arr.push(element)
        }
    }

    for (let i = 0; i < zeros; i++) {
        arr.push(0)
    }

    return arr
}

// No extra space (use same array)
function zerosToEnd(nums) {
    if (!nums || nums.length <= 1) {
        return nums
    }

    // Pointer that marks where the 0's start
    let position = 0

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]

        // If element isn't 0
        if (element !== 0) {
            // Put the element at the current position
            nums[position] = element
            // Move the pointer one position
            position++
        }
    }

    // Fill the rest of the array with 0's
    for (let i = position; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}

module.exports = {
    zerosToEndNaive,
    zerosToEnd,
}
