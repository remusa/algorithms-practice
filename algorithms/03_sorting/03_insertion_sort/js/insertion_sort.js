function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/*
 * @i: the index of the value to be inserted
 */
function insert(arr, i) {
  // The value to be inserted
  const value = arr[i]
  // Grab the next unsorted element
  let currentIndex = i

  // To find the index where the value belongs, repeatedly compare it with the elements to its left, going right to left
  while (currentIndex > 0) {
    // If the value is less than the element to its left, swap the elements
    if (value < arr[currentIndex - 1]) {
      swap(arr, currentIndex, currentIndex - 1)
    }
    // Shift current index left
    currentIndex--
  }
}

export function insertionSort(array) {
  const arr = [...array]

  // Walk through the array
  for (let i = 0; i < array.length; i++) {
    // Call the insert function on each index
    insert(arr, i)
  }

  return arr
}
