# Recursion

- **Recursion**: define something in terms of _itself_. A function that refers to itself inside of
  the function.
- **Usage**: good for tasks that have repeated subtasks to do.
- Examples:

  - DOM traversal.
  - Looking at the contents of a folder with `ls -R`.

- **Stack Overflow**: when too much memory is used on the call stack. The computer allocates memory
  when a function is called, this error occurs when we ran out of memory because we keep adding
  function calls to the function stack but we aren't popping from it (freeing it).

```javascript
function inception() {
  debugger
  inception()
}
```

## Recursion rules

1. Identify the **base case**.
2. Identify the **recursive case**.
3. Get closer and closer and **return** when needed (usually you have 2 returns, one in the base
   case and one in the recursive case).

## 2 types of cases

- **Base case**: part of the function that tells it when to stop.
- **Recursive case**: part of the function that calls itself. Make sure to `return` the result of
  the function so that it _bubbles up_ the call stack.

```javascript
let counter = 0

function inception() {
  // base case
  if (counter > 3) {
    return 'done'
  }

  // recursive case
  counter++
  return inception()
}

inception()
```

## Recursive vs. Iterative

- Anything that can be implemented iteratively can be implemented recursively.
- Advantages of recursion:
  - DRY.
  - Readability.
- Disadvantages of recursion:
  - Creates a large stack.
  - Doesn't scale nicely unless implementing _memoization_ or _dynamic programming_ (like fibonnaci
    is `O(2^n)`).

## When to use Recursion

- Every time you are using a tree or converting something into a tree.
- When the problem is _traversing_ or _searching_ through **trees and graphs**.
- **Divide-and-Conquer** can be used to solve a problem:
  1. Problem can be divided in subproblems that are smaller instances of the same problem.
     - Merge sort.
     - Quick sort.
     - Tree traversals.
     - Graph traversals.
  2. Each instance of the subproblem is identical in nature.
  3. The solutions of each subproblem can be combined to solve the problem.
- When interacting with data structures that you don't know how deep they are (can't know how many
  loops you'll have to go through, like **tree traversals**).

## Tail Call Optimization
