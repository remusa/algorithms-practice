function bubbleSort(items) {
    let length = items.length

    //Number of passes
    for (let i = 0; i < length; i++) {
        //Notice that j < (length - i)
        for (let j = 0; j < length - i - 1; j++) {
            //Compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //Swap the numbers
                let tmp = items[j] //Temporary letiable to hold the current number
                items[j] = items[j + 1] //Replace current number with adjacent number
                items[j + 1] = tmp //Replace adjacent number with current number
            }
        }
    }
}
