/*
    Google Question

    Given an array = [2,5,1,2,3,5,1,2,4]:
    It should return 2

    Given an array = [2,1,1,2,3,5,1,2,4]:
    It should return 1

    Given an array = [2,3,4,5]:
    It should return undefined

    Bonus... What if we had this:
    [2,5,5,2,3,5,1,2,4]
    return 5 because the pairs are before 2,2
*/

// O(n^2)
function firstRecurringCharacterNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return undefined
}

// O(n)
function firstRecurringCharacter(arr) {
    const length = arr.length
    const map = {}

    // add array numbers to the hash table
    for (let i = 0; i < length; i++) {
        const key = arr[i]
        // if key exists return it
        if (map[key]) {
            return key
        }
        // else add it to the map and keep going
        map[key] = key
    }

    return undefined
}

module.exports = {
    firstRecurringCharacterNaive,
    firstRecurringCharacter,
}
