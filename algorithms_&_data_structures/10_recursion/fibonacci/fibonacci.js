// Given a number N return the index value of the Fibonacci sequence, where the
// sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// The pattern of the sequence is that each value is the sum of the previous 2
// values, that means that for N=5 => 2+3

// O(n)
function fibonacciIterative(n) {
    const arr = [0, 1]

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }

    return arr[n]
}

// O(2^n) - exponential
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n
    }

    return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1)
}

module.exports = {
    fibonacciIterative,
    fibonacciRecursive,
}
