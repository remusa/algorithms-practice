// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// O(2^n)   ->  normal fibonacci
// O(n)     ->  memoized fibonacci, reduced time complexity, increased space complexity

// Example:
// Original fibonacci: 832040 | 2692537 calculations
// Memoized fibonacci: 832040 | 59 calculations
// Bottom-up fibonacci: 832040 | 29 calculations

// Original function
let calculations = 0

function fibonacci(n) {
  calculations++

  if (n <= 1) {
    return n
  }

  return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(
  `Original fibonacci: ${fibonacci(30)} | ${calculations} calculations`
)

// Memoized (top-down approach)
let calculationsMemo = 0

function memoize() {
  const cache = {}

  return function memo(n) {
    calculationsMemo++

    if (n in cache) {
      return cache[n]
    }
    if (n < 2) {
      return n
    }
    cache[n] = memo(n - 2) + memo(n - 1)
    return cache[n]
  }
}

const fibonacciMemoized = memoize()
console.log(
  `Memoized fibonacci: ${fibonacciMemoized(
    30
  )} | ${calculationsMemo} calculations`
)

// Bottom-up approach (avoids using recursion)
let calculationsBottomUp = 0

function fibonacciBottomUp(n) {
  const answer = [0, 1]

  if (n < 2) {
    return answer[n]
  }

  for (let i = 2; i <= n; i++) {
    calculationsBottomUp++
    answer.push(answer[i - 2] + answer[i - 1])
  }

  return answer.pop()
}

console.log(
  `Bottom-up fibonacci: ${fibonacciBottomUp(
    30
  )} | ${calculationsBottomUp} calculations`
)

module.exports = {
  fibonacciMemoized,
  fibonacciBottomUp,
}
