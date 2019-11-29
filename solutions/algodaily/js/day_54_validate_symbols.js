/*
    We're provided a string like the following that is inclusive of the following symbols: 1) parentheses '()', 2) brackets '[]', and 3) curly braces '{}'.

    Can you write a function that will check if these symbols are correctly ordered, contain a correct pairing, and are both of the same kind in a pair?

    For example, () is valid. (( is not.

    {{[]}} is valid. [[}} is not.
*/

// O(n)
function validateSymbols(str) {
  const stack = []
  const arr = [...str]

  for (let i = 0; i < arr.length; i++) {
    const received = arr[i]
    if (received === '(' || received === '{' || received === '[') {
      stack.push(received)
    } else {
      const last = stack.pop()
      if (
        (last === '(' && received !== ')') ||
        (last === '{' && received !== '}') ||
        (last === '[' && received !== ']')
      ) {
        return false
      }
    }
  }

  return true
}

// O(n) -> updated function
function validateSymbols2(str) {
  const stack = []
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  }

  for (let i = 0; i < str.length; i++) {
    const received = str[i]

    if (received === '(' || received === '{' || received === '[') {
      stack.push(received)
    } else {
      const last = stack.pop()

      if (last !== map[str[i]]) {
        return false
      }
    }
  }

  return true
}

module.exports = {
  validateSymbols,
  validateSymbols2,
}
