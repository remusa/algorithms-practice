function swap(array, firstIndex, secondIndex) {
    const temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function indexOfMinimum(array, startIndex) {
    let minValue = array[startIndex]
    let minIndex = startIndex

    for (let i = minIndex + 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i
            minValue = array[i]
        }
    }

    return minIndex
}

export function selectionSort(array) {
    const arr = [...array]
    let minIndex

    for (let index = 0; index < arr.length; index++) {
        minIndex = indexOfMinimum(arr, index)

        swap(arr, index, minIndex)
    }

    return arr
}
