# Sorting

* In JavaScript:
  * `sort()` sorts the elements of an array *in place* and returns
  the sorted array (*mutates* the original array).
  * `sort()` converts numbers to strings by grabbing the character code at the
    first index.

```javascript
const letters = ['a', 'b', 'c', 'r']
const basket = [2, 65, 34, 2, 1, 7, 8]

const spanish = ['único', 'árbol', 'cosas', 'fútbol']

spanish.sort((a, b) => {
    return a.localeCompare(b)
})
```
