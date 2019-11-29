/*
 * Takes in an array that has two sorted subarrays, from [p..q] and [q+1..r], and merges the array
 */
function merge(left, right) {
  const sorted = []

  // Initialize the left and right halves indices
  let i = 0
  let j = 0

  // Compare the lowest indices of both halves and copy the smaller element into the sorted array
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted.push(left[i])
      i++
    } else {
      sorted.push(right[j])
      j++
    }
  }

  // At this point, one of the two halves has been completed copied, so we
  // copy the remaining elements of the other half
  while (i < left.length) {
    sorted.push(left[i])
    i++
  }
  while (j < right.length) {
    sorted.push(right[j])
    j++
  }
  return sorted

  // Another option is to concat the remaining elements
  // return sorted.concat(left.slice(i)).concat(right.slice(j))
}

/*
 * Takes in an array and recursively merge sorts it
 */
export function mergeSort(array) {
  // If array is empty or there's only 1 element then it's already sorted
  if (array.length <= 1) {
    return array
  }

  const mid = Math.floor(array.length / 2)

  // Divide the original array into two halves
  const leftArray = array.slice(0, mid)
  const rightArray = array.slice(mid)

  // Recursively sort both halves of the array
  const leftSorted = mergeSort(leftArray)
  const rightSorted = mergeSort(rightArray)

  // Merge the sorted subarrays
  return merge(leftSorted, rightSorted)
}
