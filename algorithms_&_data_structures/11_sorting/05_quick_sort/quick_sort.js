// Swaps two items in an array, changing the original array
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
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

function quickSort(array, p, r) {
    if (p < r) {
        let q = partition(array, p, r)
        quickSort(array, p, q - 1)
        quickSort(array, q + 1, r)
    }
}

const ex1 = quickSort([2, 3, 1])
const ex2 = quickSort([9, 5, 8, 7, 2, 6, 1, 3, 4])
const ex3 = quickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])

console.log(ex1)
console.log(ex2)
console.log(ex3)

module.exports = {
    quickSort,
}
