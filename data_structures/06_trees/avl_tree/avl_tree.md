# AVL Tree

| Operation | Average case | Worst case  |
| --------- | ------------ | ----------- |
| space     | `O(n)`       | `O(n)`      |
| access    | `O(log(n))`  | `O(log(n))` |
| search    | `O(log(n))`  | `O(log(n))` |
| insert    | `O(log(n))`  | `O(log(n))` |
| delete    | `O(log(n))`  | `O(log(n))` |

* *Self-balancing tree*: when a value is inserted, it goes back and *rotates*
  the level of the tree. The heights of the two child subtrees of any node
  differ by *at most one*. If at any time they differ by more than one,
  rebalancing is done to restore this property.
* *Guarantees (O(log(n)))*: balancing guarantees searching in `O(log(n))` time, where `n` is the total number of elements in the tree.
* Insertions and deletions may require the tree to be rebalanced by one or more tree rotations.

## Resources

* [AVL tree - Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
* [AVL Tree Insertion - YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4)
* [AVL Tree Visualzation](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
* [The Little AVL Tree That Could - basecs - Medium](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
* [algorithm - Red black tree over avl tree - Stack
  Overflow](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree)
