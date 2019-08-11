/*
    The setup is the same as Two Sum-- you're given an array of numbers, and a "goal" number.

    Write a method to return an array of the indexes of the two elements in the array that sum up to the goal. If there are no such elements, return an empty array.

    The caveat here is that the numbers are guaranteed to be sorted.

    So let's say our goal number was 10. Our numbers to sum to it would be 3 and 7, and their indices 1 and 2 respectively.

    let arr = [1, 3, 7, 9, 11];
    let goal = 10;
    twoSum(arr, goal);  // [1, 2]
*/

function sortedTwoSum(nums, goal) {
    if (!nums || nums.length <= 1) {
        return []
    }

    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)

        const difference = goal - nums[i]
        if (map.has(difference)) {
            return [map.get(difference), i]
        }
    }

    return []
}

module.exports = {
    sortedTwoSum,
}
