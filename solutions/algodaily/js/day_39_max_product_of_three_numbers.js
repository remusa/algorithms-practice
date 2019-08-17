/*
    Given an unsorted array of integers, can you write a method maxProductOfThree(unsorted: array) find the largest product from three of the numbers? For example, given the following array:

    [-1, 9, 22, 3, -15, -7]

    The largest product of three numbers is 2310. This results from -15 * -7 * 22.
*/

function maxProductOfThree(unsorted) {
    if (!unsorted.length || unsorted.length <= 2) {
        return
    }

    // O(nlog(n)) if using efficient sorting algorithm
    const arr = [...unsorted].sort((a, b) => a - b)

    const product1 = arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1]
    const product2 = arr[0] * arr[1] * arr[arr.length - 1]

    return product1 > product2 ? product1 : product2
}

module.exports = {
    maxProductOfThree,
}
