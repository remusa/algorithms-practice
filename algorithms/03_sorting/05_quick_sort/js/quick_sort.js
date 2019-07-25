function swap(arr, first, second) {
    const temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}

function partition(array, p, r) {
    let q = p

    for (let j = p; j < r; j++) {
        // Compare array[j] with array[r], for j = p, p+1,...r-1
        // maintaining that:
        //  array[p..q-1] are values known to be <= to array[r]
        //  array[q..j-1] are values known to be > array[r]
        //  array[j..r-1] haven't been compared with array[r]

        // If array[j] > array[r], just increment j.

        // If array[j] <= array[r], swap array[j] with array[q],
        //   increment q, and increment j.
        if (array[j] <= array[r]) {
            swap(array, j, q)
            q++
        }
    }

    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
    swap(array, r, q)

    return q
}

export function quickSort(array, p, r) {
    if (p < r) {
        let q = partition(array, p, r)
        quickSort(array, p, q - 1)
        quickSort(array, q + 1, r)
    }
}