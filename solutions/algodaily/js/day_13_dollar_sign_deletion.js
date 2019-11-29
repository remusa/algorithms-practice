/*
    You're given an array of strings containing alphabetical characters and certain $ characters. A $ represents a DELETE action whereby the character before it is deleted.

    Each of these strings will be run through a method to operate on the $
    DELETE action. We want to find out if the final string is the same for all
    of them. Let's take an example:

    Find a solution in O(n) time and constant space.
*/

// function getFinalStr(str) {
//     const st = [...str]
//     const reversed = []

//     while (st.length !== 0) {
//         reversed.push(st.pop())
//     }

//     return reversed.join('')
// }

// function isDollarDeleteEqual(array) {
//     const stack = []
//     const strArr = array[0].split('')

//     // [ 'f', '$', 's', 't' ]
//     let i = strArr.length - 1
//     while (i >= 0) {
//         if (strArr[i] === '$') {
//             i -= 2
//         } else {
//             stack.push(strArr[i])
//             i--
//         }
//     }

//     console.log('stack', stack.join(''))
//     console.log('getFinalStr(stack)', getFinalStr(stack))
//     return array[1] === getFinalStr(stack)
// }

function getFinalStr(str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '$') {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }

  return stack.join('')
}

function isDollarDeleteEqual(arr) {
  const finalArr = arr.map(str => getFinalStr(str))

  return finalArr.every(str => str === finalArr[0])
}

isDollarDeleteEqual(['f$st', 'st'])
isDollarDeleteEqual(['f$ec', 'ec'])
isDollarDeleteEqual(['ab$$', 'c$d$'])
isDollarDeleteEqual(['b$$p', '$b$p'])

module.exports = {
  isDollarDeleteEqual,
}
