/*
    In a given array of numbers, one element will show up once and the rest will show up twice. Can you find that number in O(n) linear time?
*/

function lonelyNumber(numbers) {
    if (numbers.length === 0) {
        return null
    }

    if (numbers.length === 1) {
        return numbers[0]
    }

    const map = {}

    // O(n)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] in map) {
            map[numbers[i]]++
        } else {
            map[numbers[i]] = 1
        }
    }

    const lonely = Object.entries(map).filter(key => key[1] === 1)[0][0]
    return parseInt(lonely)
}

function lonelyNumber2(numbers) {
    if (numbers.length === 0) {
        return null
    }

    if (numbers.length === 1) {
        return numbers[0]
    }

    const map = {}

    // O(n)
    for (const num of numbers) {
        if (map.hasOwnProperty(num)) {
            delete map[num]
        } else {
            map[num] = true
        }
    }

    return parseInt(Object.keys(map)[0])
}

module.exports = {
    lonelyNumber,
    lonelyNumber2,
}
