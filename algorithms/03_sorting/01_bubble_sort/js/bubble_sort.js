function swap(arr, i, j) {
    const temp = arr[i] // temporary variable to hold the current number
    arr[i] = arr[j] // replace current number with adjacent number
    arr[j] = temp // replace adjacent number with current number
}

export function bubbleSort(array) {
    const { length } = array
    const arr = [...array]

    // Walk through the unsorted part of the array
    for (let i = 0; i < length; i++) {
        // On each iteration, compare the index we're at with the next one
        // j < (length - i) because we don't need to compare with the sorted items
        for (let j = 0; j < length - i; j++) {
            // Compare the adjacent pair
            if (arr[j] > arr[j + 1]) {
                // Swap the numbers
                swap(arr, j, j + 1)

                // ES6 syntax
                // [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }

    return arr
}
