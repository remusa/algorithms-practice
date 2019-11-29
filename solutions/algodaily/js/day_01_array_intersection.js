/*
    Can you write a function that takes two inputs and returns their intersection? All element in the final result should be unique.
*/

// O(n)
function intersection(nums1, nums2) {
  const intersection = {}

  for (const num of nums1) {
    if (nums2.indexOf(num) !== -1) {
      intersection[num] = 1
    }
  }

  return Object.keys(intersection).map(n => parseInt(n))
}

// O(n)
function intersection2(nums1, nums2) {
  const set = new Set(nums1)
  const filteredSet = new Set(nums2.filter(n => set.has(n)))

  return Array.from(filteredSet)
}

module.exports = {
  intersection,
  intersection2,
}
