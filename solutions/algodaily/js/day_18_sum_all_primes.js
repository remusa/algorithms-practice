/*
    You're given a number n. Can you write a method sumOfAllPrimes that finds all prime numbers smaller than or equal to n, and returns a sum of them?

    For example, we're given the number 15. All prime numbers smaller than 15 are:

    2, 3, 5, 7, 11, 13

    They sum up to 41, so sumOfAllPrimes(15) would return 41.
*/

// Find primes using Sieve of Eratosthenes
// 2 is the first prime number
function getPrimes(n) {
  if (n < 2) {
    return
  }

  const primes = []
  const sieve = []
  sieve[0] = false // mark 0 and 1 as not prime
  sieve[1] = false

  // start at 2, the first prime number to sqrt(n)
  for (let i = 2; i <= n; i++) {
    if (!sieve[i]) {
      // i is prime (not marked)
      primes.push(i)

      // mark as primes all multiples starting at i^2
      for (let j = i * i; j < n; j += i) {
        sieve[j] = false
      }
    }
  }

  // console.log('sieve', sieve)
  console.log('primes', primes)
  return primes
}

// getPrimes(2) // [2]
// getPrimes(7) // [2, 3, 5]
// getPrimes(15) // [ 2, 3, 5, 7 ]
// getPrimes(30) // [ 2, 3, 5, 7 ]
// getPrimes(55) // [ 2, 3, 5, 7 ]

function isPrime(n) {
  if (n <= 1) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

// O(n)
function sumOfPrimes(n) {
  if (n === 2) {
    console.log(`n: ${n}, sum: ${n}`)
    return n
  }

  // Sum the prime numbers
  let sum = 0
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }

  console.log(`n: ${n}, sum: ${sum}`)
  return sum
}

sumOfPrimes(2) // 2
sumOfPrimes(7) // 5
sumOfPrimes(15) // 28
sumOfPrimes(30) // 129
sumOfPrimes(55) // 381

module.exports = {
  sumOfPrimes,
}
