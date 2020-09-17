# Trees

- **Tree**: _abstract data type (ADT)_ that simulates a hierarchal tree structure, with a _root_
  value and _subtrees_ of children with a parent node, represented as a set of linked nodes.
- Can be defined _recursively_ as a collection of nodes (starting at the root node), where each node
  is a data structure consisting of a _value_ and _references to nodes (the children)_, with the
  constraint that no reference is duplicated, and none points to the root.
- _Linked lists_ are a kind of trees with only 1 child per node.

## Concepts

- _Root_: first node.
- _Parent_: node with children.
- _Children_: descendants of a parent (can only have 1).
- _Leaf_: final node.
- _Siblings_: nodes that share the same parent.

## Resources

- [Tree (data structure) - Wikipedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)
- [Data Structures: Trees - HackerRank](https://www.youtube.com/watch?v=oSWTXtMglKE)
- [Exploring Trees via JavaScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/js-trees)
