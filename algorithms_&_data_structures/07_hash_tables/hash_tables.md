# Hash Tables

*

```javascript

```

## Hash Table Operations

| Operation | Average case | Worst case |
| --------- | ------------ | ---------- |
| space     | `O(n)`       | `O(n)`     |
| lookup    | `O(1)`       | `O(n)`     |
| insert    | `O(1)`       | `O(n)`     |
| delete    | `O(1)`       | `O(n)`     |

* **Strengths**:
  * *Fast lookups*: constant time `O(1)` to retrieve items *on average*.
  * *Flexible keys*: most data types can be used for keys, as long as they're *hashable*.

* **Weaknesses**:
  * *Fast lookups*: linear time `O(n)` to retrieve items *worst case*.
  * *Unordered*: keys aren't stored in order.
  * *Single-directional lookups*: while you can look up the value for a given
    key in `O(1)` time, looking up the *keys* for a given value requires looping
    through the whole dataset in `O(n)` time.
  * *Not cache-friendly*: many hash table implementations use linked lists, which don't put data next to each other in memory.

```javascript

```
