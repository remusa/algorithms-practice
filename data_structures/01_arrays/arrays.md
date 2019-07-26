# Arrays

* Organizes items sequentially.
* Items are stored next to each other in memory.

```javascript
// 4 items each taking 4 bytes of memory = 16 bytes of data stored in the RAM
const strings = ['a', 'b', 'c', 'd']
```

## Static Arrays

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| lookup    | `O(1)`     |
| append    | `O(1)`     |
| insert    | `O(n)`     |
| delete    | `O(n)`     |

* **Strengths**:
  * *Fast lookups*: constant time `O(1)` to retrieve items.
  * *Fast appends/deletions*: constant time `O(1)` to add/remove to then *end*.
* **Weaknesses**:
  * *Slow appends/deletions*: linear time `O(n)` to add/remove items to the *beginning/middle*.

## Dynamic Arrays

| Operation | Average case | Worst case |
| --------- | ------------ | ---------- |
| space     | `O(n)`       | `O(n)`     |
| lookup    | `O(1)`       | `O(1)`     |
| append    | `O(1)`       | `O(n)`     |
| insert    | `O(n)`       | `O(n)`     |
| delete    | `O(n)`       | `O(n)`     |

* **Strengths**:
  * *Fast lookups*: constant time `O(1)` to retrieve items.
  * *Fast appends/deletions*: constant time `O(1)` to add/remove to then *end*.
* **Weaknesses**:
  * *Slow appends/deletions*: linear time `O(n)` to add/remove items to the *beginning/middle*.
  * *Costly insertions/deletions*: linear time `O(n)` to add/remove items to the *end* if they array needs to expand.
    * Size of the array is usually *doubled*.
    * Each element is copied into the new array.

## Static vs. Dynamic Arrays

* **Static arrays**: specify the size of the array at time of creation.
* **Dynamic arrays**: expands as needed, copies and rebuilds the array at a new
  location if/when more memory is needed.
  * Append can be `O(n)` if array needs to be rebuilt.

## Array Operations

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

## Resources

* [Array Data Structure | Interview Cake](https://www.interviewcake.com/concept/python/array?)
* [Dynamic Array Data Structure | Interview Cake](https://www.interviewcake.com/concept/python/dynamic-array)
