// Takes in an array and recursively merge sorts it
function mergeSort(array, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2)

        mergeSort(array, p, q)
        mergeSort(array, q + 1, r)
        merge(array, p, q, r)
    }
}

//  Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
function merge(array, p, q, r) {
    let lowHalf = []
    let highHalf = []

    let k = p
    let i
    let j

    //  Fill in the temporary arrays
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k]
    }

    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k]
    }

    // Reset the indices
    k = p
    i = 0
    j = 0

    //  Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i]
            i++
        } else {
            array[k] = highHalf[j]
            j++
        }
        k++
    }

    //  Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while (i < lowHalf.length) {
        array[k] = lowHalf[i]
        i++
        k++
    }

    while (j < lowHalf.length) {
        array[k] = highHalf[j]
        j++
        k++
    }
}
