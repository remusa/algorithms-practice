/*
    We're given a number n.

    Write a function that returns the string representation of all numbers from 1 to n based on the following rules:

    If it's a multiple of 3, represent it as "fizz".

    If it's a multiple of 5, represent it as "buzz".

    If it's a multiple of both 3 and 5, represent it as "fizzbuzz".

    If it's neither, just return the number itself.

    As such, fizzBuzz(15) would result in '12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz'.
*/

// O(n)
function fizzBuzz(n) {
  let answer = ''

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer += 'fizzbuzz'
    } else if (i % 3 === 0) {
      answer += 'fizz'
    } else if (i % 5 === 0) {
      answer += 'buzz'
    } else {
      answer += i.toString()
    }
  }

  return answer
}

module.exports = {
  fizzBuzz,
}
