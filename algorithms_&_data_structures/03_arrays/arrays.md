# Arrays

* Organizes items sequentially.
* Items are stored next to each other in memory.

```javascript
// 4 items each taking 4 bytes of memory = 16 bytes of data stored in the RAM
const strings = ['a', 'b', 'c', 'd']
```

* Advantages:
  * Constant time `O(1)` to find items by index.
  * Constant time `O(1)` to add/remove to then *end*.
* Disadvantages:
  * Linear time `O(n)` to add/remove items to the *end* if array is dynamic and
    it needs to be rebuilt.
  * Linear time `O(n)` to add/remove items to the *beginning/middle*.

## Operations

* Lookup.
  * With index `O(1)`.
* Push / append `O(1)`.
* Insert `O(n)`.
  * Insert in the beginning: `unshift`.
  * Insert in the middle: `splice`.
* Pop `O(1)`.
* Delete `O(n)`.
  * Delete from the beginning `O(n)`: `shift`.

```javascript
const strings = ['a', 'b', 'c', 'd']

// lookup O(1)
strings[2]

// push O(1)
strings.push('e')

// pop O(1)
strings.pop() // returns 'e' and deletes it from the array

// unshift O(n)
strings.unshift('x') // ['x', 'a', 'b', 'c', 'd']

// splice O(n)
strings.splice(2, 0, 'alien') // [ 'x', 'a', 'alien', 'b', 'c', 'd' ]
```

## Static vs. Dynamic Arrays

* **Static arrays**: specify the size of the array at time of creation.
* **Dynamic arrays**: expands as needed, copies and rebuilds the array at a new
  location if/when more memory is needed.
  * Append can be `O(n)` if array needs to be rebuilt.

## Array Implementation

*

## How to use arrays
