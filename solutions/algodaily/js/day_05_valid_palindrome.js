/*
    Given a string str, can you write a method that will return True if is a palindrome and False if it is not? If you'll recall, a palindrome is defined as "a word, phrase, or sequence that reads the same backward as forward". For now, assume that we will not have input strings that contain special characters or spaces.
*/

function isAlphaNumeric(char) {
    return /[a-zA-Z0-9]/.test(char)
}

// reversed
function isPalindrome(str) {
    const reversed = str
        .split('')
        .reverse()
        .join('')
    return str === reversed
}

// O()
function isPalindrome2(str) {
    const arr = str.toLowerCase().split('')

    if (arr.length <= 1) {
        return true
    }

    let i = 0
    let j = arr.length - 1

    while (i < j) {
        if (!isAlphaNumeric(arr[i])) {
            i++
        } else if (!isAlphaNumeric(arr[j])) {
            j--
        } else if (arr[i] !== arr[j]) {
            return false
        } else {
            i++
            j--
        }
    }

    return true
}

function isPalindrome3(str) {
    const arr = str.toLowerCase().split('')

    if (arr.length <= 1) {
        return true
    }

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(isPalindrome('A Santa Lived As a Devil At NASA'))
console.log(isPalindrome('gold'))
console.log(isPalindrome('a'))
console.log(isPalindrome('racecar'))

module.exports = {
    isPalindrome,
    isPalindrome2,
    isPalindrome3,
}
