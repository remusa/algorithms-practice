# Dynamic Programming

- **Dynamic programming**: optimization technique using _caching_.

  - Breaking down a problem into a collection of subproblems, solving each subproblem once and
    saving the solution in case it occurs again.
  - A way to track how a problem evolves.

- **Dynamic Programming vs. Divide-and-Conquer**:

  - _Divide-and-Conquer_:
    - Does more work on the sub-problems and hence has more time consumption.
    - In divide and conquer the sub-problems are independent of each other.
  - _Dynamic programming_:
    - Solves the sub-problems only once and then stores it in the table.
    - In dynamic programming the sub-problems are not independent.

- Combines:
  1. **Divide and conquer**: using recursion.
  2. **Memoization**: storing values in a _cache_.

## Dynamic Programming Cheat Sheet

1. Can be divided into a subproblem (tree like structure where problems are divided into smaller
   problems).
2. Recursive solution.
3. Repetitive subproblems (not all tree-like structures have repetitive subproblems).
4. Memoize subproblems.

## Caching

- **Caching**: storing values to use them later on (like a backpack storing common tools).

```javascript
function addTo80(n) {
  console.log(`takes a long time`)
  return n + 80
}

addTo80(5) // 85
addTo80(5) // 85    same value calculated again
addTo80(5) // 85    same value calculated once again
```

- Previous function can be optimized using a cache.

```javascript
function addTo80(n) {
  console.log(`takes a long time`)
  return n + 80
}

// create a cache
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
```

### Memoization

- **Memoization**:

  - Remember a solution to a solved problem to avoid calculating it again.
  - Ensures that a function doesn't run for the same inputs more than once by keeping a record of
    the results for the given inputs (usually in an object).
  - Form of caching that involves caching the return value of function based on its parameters.
  - If the parameter doesn't change, it gets _memoized_ (added to the cache) and returned.
  - Following function calls with the **same parameter** search first in the cache before
    calculating the return value.

- The _cache_ shouldn't live in the global scope, but instead inside of the function.
  - In JavaScript we can use **closures**.
  - We can return another function passing the parameter and have the logic inside the returned
    function.
  - We can remove the parameter from the memoized function.

```javascript
function memoizedAddTo80() {
  let cache = {}
  return function (n) {
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
```

### Bottom-up approach

- **Dynamic programming** problem solving strategy that _avoids recursion_ (saving memory by not
  building a _stack_ of function calls).
- A **bottom-up** algorithm _starts from the beginning_, while a **recursive (top-down)** algorithm
  typically _starts from the end_.

```javascript
// Top-down approach (recursive) -> space complexity O(n)
function product1ToN(n) {
  // We assume n >= 1
  if (n <= 1) {
    return 1
  }

  return n * product1ToN(n - 1)
}

// Bottom-up approach -> time complexity -> O(1) || space complexity -> O(n)
function product1ToN2(n) {
  // We assume n >= 1
  let result = 1

  for (let i = 1; i <= n; i++) {
    result *= i
  }

  return result
}
```

## Resources

- [Memoization and Dynamic Programming | Interview Cake](https://www.interviewcake.com/concept/python/memoization?)
- [algorithm - Difference between Divide and Conquer Algo and Dynamic Programming - Stack Overflow](https://stackoverflow.com/questions/13538459/difference-between-divide-and-conquer-algo-and-dynamic-programming)
