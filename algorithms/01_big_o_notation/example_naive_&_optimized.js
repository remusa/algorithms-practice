// Naive
function hasPairWithSum(arr, sum) {
    const len = arr.length

    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) return true
        }
    }

    return false
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9))

// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set()
    const len = arr.length

    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true
        }

        mySet.add(sum - arr[i])
    }

    return false
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9))
