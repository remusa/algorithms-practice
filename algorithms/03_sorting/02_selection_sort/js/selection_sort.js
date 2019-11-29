function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// First iteration startIndex is 0
function indexOfMinimum(array, startingIndex) {
  let minIndex = startingIndex

  // Compare the current element with the rest of the array
  for (let i = minIndex + 1; i < array.length; i++) {
    // Update the minimum if the current index is smaller than what we had previously
    if (array[i] < array[minIndex]) {
      minIndex = i
    }
  }

  return minIndex
}

// Time complexity is O(n^2) because in all cases we have nested loops
export function selectionSort(array) {
  const arr = [...array]

  for (let i = 0; i < arr.length; i++) {
    // Find the index of the smallest element
    const minIndex = indexOfMinimum(arr, i)
    // Swap the current element with the smallest element found
    swap(arr, i, minIndex)
  }

  return arr
}
