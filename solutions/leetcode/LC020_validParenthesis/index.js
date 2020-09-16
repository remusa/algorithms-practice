/*
20. Valid Parentheses
Easy
https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true
*/

// Time complexity: O(n) -> go through the input string only once
// Space complexity: O(n) -> worst case the stack is the same length as the input string
function isValid(str) {
  const stack = []
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (const char of str) {
    // If the char is a key the map (opening char), add it to the stack
    if (char in pairs) {
      stack.push(char)
    }
    // Else it's a closing char, so we check its corresponding opening char was at the top of the stack
    else if (pairs[stack.pop()] !== char) {
      return false
    }
  }

  return stack.length === 0
}

// Time complexity: O(n) -> go through the input string once
// Space complexity: O(n) -> worst case the stack is the same length as the input string
function isValid2(s) {
  if (!s.length) return true

  const pairs = new Map()
  pairs.set('(', ')')
  pairs.set('[', ']')
  pairs.set('{', '}')

  const stack = []

  for (const char of s) {
    // Opening symbol
    if (pairs.has(char)) {
      stack.push(char)
    }
    // Closing symbol
    else {
      // Check if stack is empty
      if (!stack.length) return false

      // Pop last element of the stack (a closing symbol)
      const last = stack.pop()

      // Compare if opening symbol (char) matches closing symbol of last
      if (char !== pairs.get(last)) return false
    }
  }

  // If there're still elements in the stack symbols are unbalanced
  if (stack.length) return false

  return true
}

export { isValid, isValid2 }
