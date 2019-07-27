# Trie

| Operation | Worst case  |
| --------- | ----------- |
| space     | `O(n)`      |
| search    | `O(n)`      |
| insert    | `O(log(n))` |
| delete    | `O(log(n))` |

`n`: length of the word.

* **Trie**: a *trie*, *radix tree* or *prefix tree* is a tree-like data
  structure.
* *Stores*: a dynamic set or an associative array where the keys
  are usually *strings*.
* *Ordered*: all the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string.
* Values tend only to be associated with leaves, and with some inner nodes that correspond to keys of interest.
* *Empty root node*: top node or root typically equals an empty string.

## Strenghts and Weaknesses

* **Strenghts**:
  * *Good for problems involving strings*: tries allows us to store and find if a
    text contains a word or use an autocomplete feature.
  * *Fast operations*: insertion and deletion are very fast (`O(log(n))`).
  * *Space efficient*: prefixes are stored in only 1 location, so duplicates
    aren't stored.

## Resources

* [Trie - Wikipedia](https://en.wikipedia.org/wiki/Trie)
* [Data Structures: Tries - HackerRank](https://www.youtube.com/watch?v=zIjfhVPRZCg)
