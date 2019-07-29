/*
    Here's the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

    We are given two strings like "cinema" and "iceman" as inputs. Can you write a method isAnagram(str1, str2) that will return true or false depending on whether the strings are anagrams of each other?
*/

// O()
function isAnagram(str1, str2) {
    const set = new Set()
    str1.split('').map(char => set.add(char.toLowerCase()))

    for (let i = 0; i < str2.length; i++) {
        if (!set.has(str2.charAt(i).toLowerCase())) {
            return false
        }
    }

    return true
}

function isAnagram2(str1, str2) {
    let a = str1.toLowerCase()
    let b = str2.toLowerCase()

    a = a
        .split('')
        .sort()
        .join('')
    b = b
        .split('')
        .sort()
        .join('')

    return a === b
}

module.exports = {
    isAnagram,
    isAnagram2,
}
