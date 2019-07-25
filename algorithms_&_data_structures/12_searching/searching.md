# Searching

## Linear Search - O(n)

* **Linear Search (or sequential search)**: is a method of finding a value
  within a list by checking each element of the list until a match is found or
  the list ends.

| Operation | Best case | Average case | Worst case |
| --------- | --------- | ------------ | ---------- |
| search    | `O(1)`    | `O(n)`       | `O(n)`     |

* *Best case*: item is at the beginning of the list.
* *Average case*: item is in the middle of the list.
* *Worst case*: item is at the end of the list.

* JavaScript has many built in methods for finding elements in a list.

```javascript
const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']

beasts.indexOf('Godzilla')

beasts.findIndex(function(item){
  return item === 'Godzilla'
});

beasts.find(function(item){
  return item === 'Godzilla'
})

beasts.includes('Godzilla')
```

### Linear Search Implementation

```javascript
function linearSearch(array, value) {
    const length = array.length

    if (length === 0) {
        return -1
    }

    for (let i = 0; i < length; i++) {
        if (value === array[i]) {
            return i
        }
    }

    return -1
}
```

## Binary Search - O(log(n))

* **Binary Search**: assuming the list is sorted, each passing of the function
  discards *at most* half of the remaining elements.
* *Divide and conquer algorithm*: binary search is represented by a *binary
  search tree*, eliminating half the options on each iteration.

| Operation | Worst case  |
| --------- | ----------- |
| search    | `O(log(n))` |

* *Best case*: item is at the beginning of the list.
* *Average case*: item is in the middle of the list.
* *Worst case*: item is at the end of the list.

### Binary Search Implementation

```javascript
function linearSearch(array, value) {
    const length = array.length

    if (length === 0) {
        return -1
    }

    for (let i = 0; i < length; i++) {
        if (value === array[i]) {
            return i
        }
    }

    return -1
}
```
