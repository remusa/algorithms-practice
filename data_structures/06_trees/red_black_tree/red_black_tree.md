# Red/Black Tree

| Operation | Worst case  |
| --------- | ----------- |
| space     | `O(n)`      |
| access    | `O(log(n))` |
| search    | `O(log(n))` |
| insert    | `O(log(n))` |
| delete    | `O(log(n))` |

* *Self-balancing tree*: each node has an extra color property with a value of `red` or
  `black`. All children of a parent node must have the same color.
* *Balancing*: balancing is done by painting each node of the tree with one of
  the two colors. When the tree is modified, the new tree is rearranged and
  repainted.
* *Guarantees (O(log(n)))*: balancing of the tree is not perfect, but it guarantees searching in `O(log(n))` time, where `n` is the total number of elements in the tree.

## Resources

* [Red–black tree - Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
* [Red-Black Tree | Set 2 (Insert) - GeeksforGeeks](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/)
* [Red/Black Tree Visualization](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
* [Painting Nodes Black With Red-Black Trees - basecs - Medium](https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5)
* [algorithm - Red black tree over avl tree - Stack
  Overflow](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree)
