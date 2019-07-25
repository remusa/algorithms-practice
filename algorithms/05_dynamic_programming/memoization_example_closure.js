function memoizedAddTo80() {
    let cache = {}
    return function(n) {
        // closure to avoid putting cache in global scope
        if (n in cache) {
            return cache[n]
        } else {
            console.log(`long operation`)
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()

console.log('1', memoized(5))
console.log('2', memoized(5))
console.log('3', memoized(6))

// returns
// long operation
// 1 85
// 2 85
// long operation
// 3 86
