# Hash Tables

* Key-value pairs.
* Hash tables are **unordered**.
* *Hash function*: a function that generates a value of fixed length for each
  input.
  * Converts a key into an array index (an integer) if using an array implementation.
  * Hash functions are *idempotent* (always outputs the same as long as the
    input is the same).
  * Maps the resulting value of the hash function to a memory address.
  * Example: grabbing the number value of each character in a string and adding
    them up.

```javascript
let user = {
    age: 11,
    name: 'Harry',
    magic: true,
    scream: function() {
        console.log('AHHH!)
    },
}

user.age                    // 0(1)
user.spell = 'expelliarmus' // O(1)
user.scream()               // O(1)
```

## Hash Collisions

* **Hash collisions**: when the hash table stores more than 1 value in the same
  address by storing a *linked list* inside of the address.

## Sets

* **Set**: similar to a hash table except it only *stores keys without values*.
* Difference with **sets**: `sets` don't allow for duplicate values.
* Useful when tracking groups of items (like nodes visited in a graph, characters seen in a string).

## Hash Table Operations

| Operation | Average case | Worst case |
| --------- | ------------ | ---------- |
| space     | `O(n)`       | `O(n)`     |
| lookup    | `O(1)`       | `O(n)`     |
| insert    | `O(1)`       | `O(n)`     |
| delete    | `O(1)`       | `O(n)`     |

* Operations normally cost `O(1)`, but in the worst-case scenario they can take `O(n)`:
  * When you have to walk through all of the values for a single lookup.
  * If you have to *resize the array* because the number of key-value pairs in the
  hash map exceeds the number of indices in the underlying array. We could expand
  the array, allocating a bigger one and rehashing all of the existing keys to
  the new one (`O(n)`).

* **Strengths**:
  * *Fast lookups*: constant time `O(1)` to retrieve items *on average*.
  * *Flexible keys*: most data types can be used for keys, as long as they're *hashable*.

* **Weaknesses**:
  * *Fast lookups*: linear time `O(n)` to retrieve items *worst case*.
  * *Unordered*: keys aren't stored in order.
  * *Single-directional lookups*: to look up the value for a given
    key is `O(1)` time, looking up the *key* for a given value requires looping
    through the whole dataset in `O(n)` time.
  * *Not cache-friendly*: many hash table implementations use linked lists, which don't put data next to each other in memory.
  * *Cost of hashing function*: the cost of the hashing function can be greater
    can be high.

## Hash Table Implementation

* *Hash tables* are built using *arrays*: they let us use flexible keys instead of the integer indexes of arrays.

```javascript
class HashTable {
    constructor(size) {
        // this.data = []
        this.data = new Array(size)
    }

    _hash(key) {
        let address = 0
        for (let i = 0; i < key.length; i++) {
            address = (address + key.charCodeAt(i) * i) % this.data.length // address function
        }
        return address
    }

    set(key, value) {
        const address = this._hash(key)
        // if address bucket doesn't exist create it
        if (!this.data[address]) {
            this.data[address] = []
        }
        // add key-value pair to the address bucket
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        const address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = []
        console.log(this.data.length)
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]) // second 0 is the key
            }
        }
        return keysArray
    }
}
```

## Maps and Sets in JavaScript

* In ES6, we can create `Sets` and `Maps`.
* **Maps**:
  * Allow setting anything (integer, string, function) as a key.
  * Maintains *insertion order*.
* **Sets**:
  * Only stores the *keys*.
  * Values are inserted a single time (no duplicates).
