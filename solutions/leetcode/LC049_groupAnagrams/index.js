/*
49. Group Anagrams
https://leetcode.com/problems/group-anagrams/
Medium

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
]

Note:

    All inputs will be in lowercase.
    The order of your output does not matter.
*/

// Time complexity: O(n*k*log(k)) -> n is the # of strings, k is the length of the strings (k*log(k) is because of the sorting algorithm)
// Space complexity: O(n*k) -> words stored in the hash table
function groupAnagrams(arr) {
  // Words that are anagrams of each other will be the same word if their letters are sorted alphabetically
  const grouped = {}

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i]

    // Split word into array of characters, sort them and put them back together
    const key = word.split('').sort().join('')

    // If key doesn't exist in map, create it with the value of an empty array
    if (!grouped[key]) {
      grouped[key] = []
    }

    // Push the sorted word into the value of the map49. Group Anagrams
    grouped[key].push(word)
  }

  // Return the anagrams arrays
  return Object.values(grouped)
}

module.exports = groupAnagrams
