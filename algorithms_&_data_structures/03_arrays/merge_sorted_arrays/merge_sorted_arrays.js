/*
    Merge two given arrays into one
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
