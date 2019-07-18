# Recursion

* **Recursion**: define something in terms of *itself*. A function that refers
  to itself inside of the function.
* **Usage**: good for tasks that have repeated subtasks to do.
* Examples:
  * DOM traversal.
  * Looking at the contents of a folder with `ls -R`.

* **Stack Overflow**: when too much memory is used on the call
  stack. The computer allocates memory when a function is called, this error
  occurs when we ran out of memory because we keep adding function calls to the
  function stack but we aren't popping from it (freeing it).

```javascript
function inception() {
    debugger
    inception()
}
```

## Recursion rules

1. Identify the **base case**.
2. Identify the **recursive case**.
3. Get closer and closer and **return** when needed (usually you have 2 returns,
   one in the base case and one in the recursive case).

## 2 types of cases

* **Base case**: part of the function that tells it when to stop.
* **Recursive case**: part of the function that calls itself. Make sure to
  `return` the result of the function so that it *bubbles up* the call stack.

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

* Anything that can be implemented iteratively can be implemented recursively.


## Tail Call Optimization

*

## When to use Recursion

*
