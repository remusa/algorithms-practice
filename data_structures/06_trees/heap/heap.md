# Heap

| Operation | Worst case  |
| --------- | ----------- |
| space     | `O(n)`      |
| search    | `O(n)`      |
| insert    | `O(log(n))` |
| delete    | `O(log(n))` |

* **Heap**: a *heap* is a small collection or group. A heap in CS means a
  *specialized tree-based data structures*, where the largest or smallest element is at the top.
  * *Max heap*: the root node has the *highest value* or priority.
  * *Min heap*: the root node has the *lowest value* or priority.

* **Binary heap**: commonly used when ordering is important, like in *priority queues*.

## Strenghts and Weaknesses

* **Strenghts**:
  * *Space efficient*: size is flexible.
  * *Always balanced*: insertions are always left-to-right, so they preserve
    insertion order.
  * *Operations are O(log(n))*: insertion and deletion are very fast (`O(log(n))`).
  * *Good at comparisons*: binary heaps are good at doing comparative
    operations, like grabbing a set of values greater than or lesser than `x`.
    If using a binary-search tree, we would need to traverse the entire tree.
  * *Good at finding maximum/minimum value*: finding the root node is always `O(1)`.
* **Weaknesses**:
  * *Slow searches in O(n)*: unlike binary-search trees, where the smaller value is on
  the left child and the greater value is on the right child, in *binary heaps*,
  the left and right children can be any value as long as it's smaller/greater
  than the top value, so when traversing we need to check *both sides*, losing
  `O(log(n))`.

## Resources

* [Heap (data structure) - Wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure))
* [Data Structures: Heaps - HackerRank](https://www.youtube.com/watch?v=t0Cq6tVNRBA)
* [c++ - Why are two different concepts both called "heap"? - Stack Overflow](https://stackoverflow.com/questions/1699057/why-are-two-different-concepts-both-called-heap)
* [Binary Heaps -- Eloquent JavaScript](https://eloquentjavascript.net/1st_edition/appendix2.html)
