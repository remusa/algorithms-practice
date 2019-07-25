function bubbleSort(array) {
    const arr = [...array]
    const length = array.length

    //Number of passes
    for (let i = 0; i < length; i++) {
        //Notice that j < (length - i)
        for (let j = 0; j < length; j++) {
            //Compare the adjacent positions
            if (arr[j] > arr[j + 1]) {
                //Swap the numbers
                let temp = arr[j] // temporary variable to hold the current number
                arr[j] = arr[j + 1] // replace current number with adjacent number
                arr[j + 1] = temp // replace adjacent number with current number
            }
        }
    }

    return arr
}

module.exports = {
    bubbleSort,
}
