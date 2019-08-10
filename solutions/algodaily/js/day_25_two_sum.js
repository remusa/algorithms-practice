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
    const results = []

    if (!arr || arr.length <= 1) {
        return results
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === goal) {
                results.push(i)
                results.push(j)
                console.log('results', results)
                return results
            }
        }
    }

    return undefined
}

// O(n)
function twoSum(arr, goal) {
    const results = []

    if (arr.length <= 1) {
        return results
    }

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] + arr[right] === goal) {
            results.push(left)
            results.push(right)
            console.log('results', results)
            return results
        }

        if (arr[left] < goal) {
            left++
        } else if (arr[right] < goal) {
            right--
        }
    }

    console.log('undefined', undefined)
    return undefined
}

twoSumNaive([1, 3, 6, 7, 9], 10) // [0, 4]
twoSumNaive([1, 9, 13, 20, 47], 10) // [0, 1]
twoSumNaive([3, 2, 4, 1, 9], 12) // [0, 4]

module.exports = {
    twoSumNaive,
    twoSum,
}
