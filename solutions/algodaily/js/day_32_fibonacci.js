/*
    Implement a function that returns the Fibonnaci number for a given integer input.
*/

// O(n) - Bottom-up approach to avoid recursion
function fibonacciBottomUp(n) {
    const res = [0, 1]

    if (n <= 1) {
        return res[n]
    }

    for (let i = 2; i <= n; i++) {
        res.push(res[i - 2] + res[i - 1])
    }

    return res.pop()
}

const cache = {}
function fibonacciRecursiveMemo(n) {
    if (n in cache) {
        return cache[n]
    }

    if (n <= 1) {
        return n
    }

    cache[n] = fibonacciRecursiveMemo(n - 2) + fibonacciRecursiveMemo(n - 1)
    return cache[n]
}

module.exports = {
    fibonacciBottomUp,
    fibonacciRecursiveMemo,
}
