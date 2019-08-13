/*
    If we are given an array of integers, can you return an output array such that each corresponding input's elements returns the product of the input array except itself?

    This can be hard to explain, so let's take an array: [1, 2, 4, 16]

    What we want to return is [128, 64, 32, 8]. This is because 2 x 4 x 16 = 128, 1 x 4 x 16 = 64, 1 x 2 x 16 = 32, and 1 x 2 x 4 = 8.

    In other words, output[i] is equal to the product of all the elements in the array other than input[i].

    Can you solve this in O(n) time without division?
*/

// O(n^2)
function productExceptSelfNaive(nums) {
    if (!nums || nums.length <= 1) {
        return []
    }

    const results = []

    for (let i = 0; i < nums.length; i++) {
        let product = 1

        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j]
            }
        }

        results.push(product)
    }

    return results
}

function productExceptSelf(nums) {
    console.log('nums', nums)
    if (!nums || nums.length <= 1) {
        return []
    }

    const size = nums.length
    const results = []
    let product = 1

    for (let i = 0; i < size; i++) {
        results.push(product)
        product *= nums[i]
    }
    console.log('results 1', results)

    product = 1
    for (let j = size - 1; j >= 0; j--) {
        results[j] *= product
        product *= nums[j]
    }

    console.log('results 2', results)
    return results
}

productExceptSelf([1, 2, 4, 16])
// productExceptSelf([7, 8, 5, 18, 16, 11, 20])

module.exports = {
    productExceptSelfNaive,
    productExceptSelf,
}
