/*
    Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

    Note:
        The number of elements initialized in nums1 and nums2 are m and n respectively.
        You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

    Example:

    Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]
*/

// O(n^2) -> nested loops
function mergeSortedArrays(arr1, arr2) {
    // if one array is empty return the other one
    if (arr1.length == 0) {
        return arr2
    }
    if (arr2.length == 0) {
        return arr1
    }

    const mergedArray = []
    let i = 1
    let j = 1

    let item1 = arr1[0]
    let item2 = arr2[0]

    while (item1 || item2) {
        if (item2 === undefined || item1 < item2) {
            mergedArray.push(item1)
            item1 = arr1[i]
            i++
        } else {
            mergedArray.push(item2)
            item2 = arr2[j]
            j++
        }
    }

    return mergedArray
}

module.exports = {
    mergeSortedArrays,
}
