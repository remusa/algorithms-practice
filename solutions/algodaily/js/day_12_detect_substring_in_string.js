/*
    How would you write a function to detect a substring in a string?

    If the substring can be found in the string, return the index at which it starts. Otherwise, return -1.
    ​
    Important-- do not use the native String class's built-in substring or substr method.
*/

function detectSubstring(str, subStr) {
    if (str.length === 0 || subStr.length > str.length) {
        return -1
    }

    const { length } = str
    const subsLength = subStr.length
    const limit = length - subsLength

    for (let i = 0; i <= limit; i++) {
        const char = str[i]
        const firstCharSubs = subStr[0]

        if (char === firstCharSubs) {
            let subs = ''
            let j = i
            while (j < subsLength + i) {
                subs += str.charAt(j)
                j++
            }
            if (subs === subStr) {
                return i
            }
        }
    }

    return -1
}

// O(n)
function detectSubstringImproved(str, subStr) {
    let i = 0
    let j = 0

    for (i = 0; i < str.length; i++) {
        // if match, compare next character of subStr with next of string
        if (str[i] === subStr[j]) {
            j++
            if (j === subStr.length) {
                // return the index where substring starts
                return i - (subStr.length - 1)
            }
        }
        // no match found, so reset i and j
        else {
            i -= j
            j = 0
        }
    }

    return -1
}

module.exports = {
    detectSubstring,
    detectSubstringImproved,
}
