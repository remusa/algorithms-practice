function swap(arr, first, second) {
    const temp = arr[first] // temporary variable to hold the current number
    arr[first] = arr[second] // replace current number with adjacent number
    arr[second] = temp // replace adjacent number with current number
}

export function bubbleSort(array) {
    const { length } = array
    const arr = [...array]

    // Walk through the unsorted part of the array
    for (let i = 0; i < length; i++) {
        // j < (length - i)
        // On each iteration, compare the index we're at with the next one
        for (let j = 0; j < length; j++) {
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
