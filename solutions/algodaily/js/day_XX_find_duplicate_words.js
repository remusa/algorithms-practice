/*
  https://algodaily.com/challenges/find-duplicate-words/javascript

  A very common interview challenge is to determine how often words appear in a given string or set of strings. Here's a version of this: return a list of duplicate words in a sentence.

  For example, given 'The dog is the best', returns ["the"].

  Likewise, given 'Happy thanksgiving, I am so full', you would return an empty array. This is because there are no duplicates in the string.
*/

// O(n) => iterate once through the array
function findDuplicates(str) {
	const dupes = []

  const set = new Set()

  str.toLowerCase().split(" ").map(word => {
  	if (set.has(word)) {
      dupes.push(word)
    } else {
      set.add(word)
    }
  })

	return dupes
}

module.exports = {
  findDuplicates,
}
