/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
Easy

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
  const pairsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    // If the char is a key the map (opening char), add it to the stack
    if (pairsMap[char]) {
      stack.push(char)
    }
    // Else it's a closing char, so we check its corresponding opening char was at the top of the stack
    else if (pairsMap[stack.pop()] !== char) {
      return false
    }
  }

  return stack.length === 0
}

module.exports = isValid
