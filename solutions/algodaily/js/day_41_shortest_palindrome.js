/*
  We have a string str like the following:

  const str = "bubble";

  Find a way to convert it to a palindrome by inserting characters in front of it. Recall that a palindrome is defined as "a word, phrase, or sequence that reads the same backward as forward".

  What's the shortest palindrome that can be returned? For example, the following above string should return:

  https://algodaily.com/challenges/find-shortest-palindrome-possible
*/

// Time complexity: O(n^2)
export function shortestPalindrome(s) {
  // Use two pointers to keep track
  let left = 0
  let right = s.length - 1

  while (right >= 0) {
    // Move left pointer to the right until there's a match
    if (s[left] === s[right]) {
      left++
    }

    // Move right pointer to get palindrome midpoint
    right--
  }

  if (left === s.length) {
    return s
  }

  // Find where the palindrome ends
  const palindromeEnd = s.substr(left)

  // Rebuild palindrome recursively

  // Reverse the end
  const reversedEnd = palindromeEnd
    .split('')
    .reverse()
    .join('')
  // just the existing palindrome
  const existingPalindrome = shortestPalindrome(s.substr(0, left))

  // leave the end
  return reversedEnd + existingPalindrome + palindromeEnd
}
