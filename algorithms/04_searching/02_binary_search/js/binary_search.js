/*
    @array Assumed to be sorted
    @value Value to be searched
*/
function binarySearch(array, value) {
    // 1. Initialize variables that hold the indices of both ends
    let start = 0
    let end = array.length - 1

    // 2. While beginning <= end we haven't found the value
    while (start <= end) {
        // 3. Calculate the middle index
        const mid = Math.floor((start + end) / 2)

        // 4. Check if the middle index contains the value
        if (array[mid] === value) {
            return mid
        }

        // 5. Else if value is smaller than the middle then the element is in
        //    the left side, so we move the starting index
        if (array[mid] < value) {
            // 5. Move to the right half of the array
            start = mid + 1
        }
        // 6. Value is in the right side
        else {
            // 7. Move to the left half of the array
            end = mid - 1
        }
    }

    // 9. If the loop ended then we didn't find the element
    return -1
}

module.exports = {
    binarySearch,
}
