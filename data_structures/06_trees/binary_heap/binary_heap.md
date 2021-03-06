# Binary Heap

| Operation | Worst case  |
| --------- | ----------- |
| space     | `O(n)`      |
| insert    | `O(log(n))` |
| delete    | `O(log(n))` |
| search    | `O(n)`      |

- **Heap**: a _heap_ is a small collection or group. It's a specialized tree-based data structure,
  where the largest or smallest element is at the top.

  - Used to implement _priority queues_.
  - Used with _graph traversal algorithms_.

- **Types**:

  - _Max heap_: parent nodes are always larger than child nodes, the root node has the _highest
    value_ or priority.
  - _Min heap_: parent nodes are always smaller than child nodes, the root node has the _lowest
    value_ or priority.

- **Binary heap**: commonly used when ordering is important, like in _priority queues_.

- **Max binary heap**:
  - Each parent has at most two child nodes.
  - The value of each parent node is _always_ greater than its child nodes.
  - In a Max Binary Heap the parent is _greater_ than the children, but there are no guarantees
    between sibling nodes.
  - A binary heap is as compact as possible. All the children of each node are as full as they can
    be and left children are filled out first.

## Strenghts and Weaknesses

- **Strenghts**:
  - _Space efficient_: size is flexible.
  - _Always balanced_: insertions are always left-to-right, so they preserve insertion order.
  - _Fast insertions and deletions_: insertion and deletion are very fast (`O(log(n))`).
  - _Good at comparisons_: binary heaps are good at doing comparative operations, like grabbing a
    set of values greater than or lesser than `x`. If using a binary-search tree, we would need to
    traverse the entire tree.
  - _Good at finding maximum/minimum value_: finding the root node is always `O(1)`.
- **Weaknesses**:
  - _Slow searches_: search is `O(n)`, unlike binary-search trees, where the smaller value is on the
    left child and the greater value is on the right child, in _binary heaps_, the left and right
    children can be any value as long as it's smaller/greater than the top value, so when traversing
    we need to check _both sides_, losing `O(log(n))`.

## Pseudocode

- **Insert**:

```
Push the value into the values property on the heap
Bubble Up:
  Create a variable called index which is the length of the values property - 1
  Create a variable called parentIndex which is the floor of (index-1)/2
  Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    Swap the value of the values element at the parentIndex with the value of the element property at the child index
    Set the index to be the parentIndex, and start over
```

- **Remove**: also called `extractMax`.
  - _Note_: _sink down_ is the procedure for deleting the root from the heap (effectively extracting
    the maximum element in a max-heap or the minimum element in a min-heap) and restoring the
    properties is called _down-heap_ (also known as _bubble-down_, percolate-down, sift-down,
    trickle down, heapify-down, cascade-down, and extract-min/max).

```
Swap the first value in the values property with the last one
Pop from the values property, so you can return the value at the end.
Have the new root "sink down" to the correct spot...​
  Your parent index starts at 0 (the root)
  Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
  The child index you swapped to now becomes the new parent index.
  Keep looping and swapping until neither child is larger than the element.
  Return the old root
```

## Resources

- [Heap (data structure) - Wikipedia](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)
- [Data Structures: Heaps - HackerRank](https://www.youtube.com/watch?v=t0Cq6tVNRBA)
- [c++ - Why are two different concepts both called "heap"? - Stack Overflow](https://stackoverflow.com/questions/1699057/why-are-two-different-concepts-both-called-heap)
- [Binary Heaps -- Eloquent JavaScript](https://eloquentjavascript.net/1st_edition/appendix2.html)
- [Learning to Love Heaps - basecs - Medium](https://medium.com/basecs/learning-to-love-heaps-cef2b273a238)
- [Binary Heaps -- Eloquent JavaScript](https://eloquentjavascript.net/1st_edition/appendix2.html)
- [Binary Heaps and Priority Queues via JavaScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/js-binary-heaps)
