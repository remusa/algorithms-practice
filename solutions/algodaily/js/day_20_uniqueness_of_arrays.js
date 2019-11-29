/*
    Given an array, return just the unique elements without using any built-in Array filtering. In other words, you're removing any duplicates.

    Note: Order needs to be preserved, so no sorting should be done.
*/

// O(1)
function uniques(array) {
  const uniquesArr = []

  for (let i = 0; i < array.length; i++) {
    if (uniquesArr.indexOf(array[i]) === -1) {
      uniquesArr.push(array[i])
    }
  }

  return uniquesArr
}

module.exports = {
  uniques,
}
