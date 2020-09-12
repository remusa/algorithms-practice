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

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (!map.has(char)) {
      map.set(char, 1)
    } else {
      map.set(char, map.get(char) + 1)
    }
  }

  let compacted = ''
  for (const entry of map) {
    const key = entry[0]
    const value = entry[1]

    compacted += `${key}`

    if (value > 1) {
      compacted += `${value}`
    }
  }

  return compacted.length
}

// O(1) in space by replacing
function compactLengthO1(str) {
  let answerIdx = 0

  for (let i = 0; i < str.length; i++) {
    let count = 1

    while (str[i] === str[i + 1]) {
      count++
      i++
    }

    str[answerIdx++] = str[i]

    if (count > 1) {
      count
        .toString()
        .split('')
        .forEach(char => {
          str[answerIdx++] = char
        })
    }
  }

  return answerIdx
}

module.exports = {
  compactLength,
  compactLengthO1,
}
