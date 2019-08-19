/*
    Let's define the "compacting" of a string as taking a string like the following:

    'sstttrrrr'

    Where we take the number of appearances in a row of each letter:

    s: 2
    t: 3
    r: 4
    ​
    And denote them next to the original character in the string, getting rid of the duplicates.

    's2t3r4'

    How long is this 'compacted' string? Could you write a method that takes in a string and returns the length of the compacted one? Could you solve it using only O(1) extra space?
*/

// O(n) space
function compactLength(str) {
    const map = new Map()
    let compacted = ''

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1)
        }
    }

    for (const key of map) {
        const k = key[0]
        const v = key[1]

        compacted += `${k}`

        if (v > 1) {
            compacted += `${v}`
        }
    }

    return compacted.length
}

// O(1)
function compactLengthOptimized(str) {
    const map = new Map()
    let compacted = ''

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1)
        }
    }

    for (const key of map) {
        const k = key[0]
        const v = key[1]

        compacted += `${k}`

        if (v > 1) {
            compacted += `${v}`
        }
    }

    return compacted.length
}

compactLengthOptimized('s')
compactLengthOptimized('abb')
compactLengthOptimized('aabbbbbbbbbbbbb')
compactLengthOptimized('sstttrrrr')

module.exports = {
    compactLength,
    compactLengthOptimized,
}
