/*
    How would you write a function to detect a substring in a string?

    If the substring can be found in the string, return the index at which it starts. Otherwise, return -1.
    ​
    Important-- do not use the native String class's built-in substring or substr method.
*/

function detectSubstring(str, subStr) {
    if (str.length === 0) {
        return -1
    }

    const subsLength = subStr.length
    // const map = {}

    // O(n)
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const firstCharSubs = subStr[0]

        if (char === firstCharSubs) {
            let subs = ''
            let j = i
            // O(m)
            while (j < subsLength + i) {
                subs += str.charAt(j)
                j++
            }
            if (subs === subStr) {
                return i
            }
            // map[subs] = i
        }
    }

    // if (subStr in map) {
    //     return map[subStr]
    // }

    // console.log('map', map)
    return -1
}

module.exports = {
    detectSubstring,
}
