let cache = {}

function memoizedAddTo80(n) {
    // search for the value in cache before calculating it
    // first time cache is empty
    if (n in cache) {
        return cache[n] // property access is O(n)
    }
    // cache = {
    //  5: 85 -> cached value
    // }
    else {
        console.log(`long operation`)
        // add to cache
        cache[n] = n + 80
        // return cache value
        return cache[n]
    }
}

console.log('1', memoizedAddTo80(5))
console.log('2', memoizedAddTo80(5))

// prints
// > long operation
// > 1 85
// > 2 85
