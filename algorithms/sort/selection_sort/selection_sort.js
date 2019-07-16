function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

function indexOfMinimum (array, startIndex) {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    for (let i = minIndex + 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
            minValue = array[i];
        }
    }

    return minIndex;
};

function selectionSort(array) {
    let minIndex;

    for (let index = 0; index < array.length; index++) {
        minIndex = indexOfMinimum(array, index);
        swap(array, index, minIndex);
    }
};