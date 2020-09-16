/*
49. Group Anagrams
Medium
https://leetcode.com/problems/group-anagrams/

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

// Time complexity: O(n * k * log(k)) -> n is the # of strings, k is the length of the strings (k*log(k) is because of the sorting algorithm)

// Space complexity: O(n*k) -> words stored in the hash table
function groupAnagrams(strs) {
  // Words that are anagrams of each other will be the same word if their letters are sorted alphabetically
  const grouped = {}

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i]

    // Split word into array of characters, sort them and put them back together
    const key = word.split('').sort().join('')

    // If key doesn't exist in map, create it with the value of an empty array
    if (!grouped[key]) {
      grouped[key] = []
    }

    // Push the sorted word into the value of the map
    grouped[key].push(word)
  }

  // Return the anagrams arrays
  return Object.values(grouped)
}

// Time complexity: O(k * n * log(n)) -> n*log(n) for sorting, k = number of strings
// Space complexity: O(n) -> n keys
function groupAnagrams2(strs) {
  const map = new Map()

  // Iterate through the array of strings
  for (const str of strs) {
    // Use the sorted string as the key for the map
    const sorted = str.split('').sort().join('')

    // If the sorted string isn't in the map create the array
    if (!map.has(sorted)) {
      map.set(sorted, [])
    }

    // Push the original word (not the sorted one) into the value of the map
    map.set(sorted, [...map.get(sorted), str])
  }

  // Return an array of arrays (anagrams)
  return Array.from(map.values())
}

export { groupAnagrams, groupAnagrams2 }
