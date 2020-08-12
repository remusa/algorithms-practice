# AVL Tree

| Operation | Average case | Worst case  |
| --------- | ------------ | ----------- |
| space     | `O(n)`       | `O(n)`      |
| access    | `O(log(n))`  | `O(log(n))` |
| search    | `O(log(n))`  | `O(log(n))` |
| insert    | `O(log(n))`  | `O(log(n))` |
| delete    | `O(log(n))`  | `O(log(n))` |

- _Self-balancing tree_: when a value is inserted, it goes back and _rotates_ the level of the tree.
  The heights of the two child subtrees of any node differ by _at most one_. If at any time they
  differ by more than one, rebalancing is done to restore this property.
- _Guarantees (O(log(n)))_: balancing guarantees searching in `O(log(n))` time, where `n` is the
  total number of elements in the tree.
- Insertions and deletions may require the tree to be rebalanced by one or more tree rotations.

## Resources

- [AVL tree - Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
- [AVL Tree Insertion - YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4)
- [AVL Tree Visualzation](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
- [The Little AVL Tree That Could - basecs - Medium](https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7)
- [algorithm - Red black tree over avl tree - StackOverflow](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree)
- [javascript-algorithms/AvlTree.js at master · zero-to-mastery/javascript-algorithms](https://github.com/zero-to-mastery/javascript-algorithms/blob/master/src/data-structures/tree/avl-tree/AvlTree.js)
