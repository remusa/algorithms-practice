/*
    Given an integer num, write a method to determine if it is a power of 3.

    console.log(powerOfThree(9));
    // true
*/

function powerOfThree(n) {
  if (n < 3) {
    return false
  }

  let i = 1
  let res // save the

  // multiply by 3
  while (i <= n) {
    res = i
    i *= 3
  }

  return res === n
}

module.exports = {
  powerOfThree,
}
