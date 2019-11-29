function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/*
    The partition function should partition the subarray array[p..r] so that all elements in array[p..q-1] are less than or equal to array[q] (the pivot) and all elements in array[q+1..r] are greater than array[q], and it returns the index q of where the pivot ends up.
*/
function partition(array, p, r) {
  // Initialize the pivot (q) and j to the first element of the array
  let q = p

  // Loop through the subarray until we reach the pivot
  for (let j = p; j < r; j++) {
    // Compare the left most element arr[j] with the pivot arr[q]
    if (array[j] <= array[r]) {
      // Swap the element in the current index arr[j] with the element in
      // the pivot arr[q]
      swap(array, j, q)
      // Shift the pivot to the right
      q++
    }
  }

  // Swap the pivot, arr[q], with the leftmost element arr[r]
  swap(array, r, q)

  // Return the calculated pivot
  return q
}

/*
    Recursively sort the subarray array[p..r].
    - If the subarray has size 0 or 1, then it's already sorted, and so nothing needs to be done.
    - Otherwise, quickSort uses divide-and-conquer to sort the subarray.
*/
export function quickSort(array, start, end) {
  if (array.length <= 1) {
    return array
  }

  if (start < end) {
    // Choose an element as the pivot
    const pivot = partition(array, start, end)

    // Divide the array into halves using the pivot and recursively sort both halves of the array
    quickSort(array, start, pivot - 1)
    quickSort(array, pivot + 1, end)
  }

  // Return the sorted array
  return array
}
