// Create a function that reverses a string:
// 'hello' -> 'olleh'
// 'Hello, World!' -> '!dlroW ,olleH'

function reverseStringOneLiner(str) {
    return str // [...str] to avoid split
        .split('')
        .reverse()
        .join('')
}

function reverseStringIterative(str) {
    // check input for empty | 1 letter | not a string
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Not a string or string is already reversed'
    }

    const reversed = []
    const length = str.length - 1

    for (let i = length; i >= 0; i--) {
        reversed.push(str[i])
    }

    return reversed.join('')
}

function reverseStringRecursive(str) {
    if (str === '') {
        return ''
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0)
    }
}

module.exports = {
    reverseStringIterative,
    reverseStringOneLiner,
    reverseStringRecursive,
}
