# Trie

| Operation | Worst case  |
| --------- | ----------- |
| space     | `O(m)`      |
| search    | `O(m)`      |
| insert    | `O(log(m))` |
| delete    | `O(log(m))` |

`m`: length of the word.

* **Trie**: a *trie*, *radix tree* or *prefix tree* is a tree-like data
  structure.
  * Called *trie* because they make data re*trie*val easy.
  * Optimized for *prefix searching*.
* *Stores*: a dynamic set or an associative array where the keys
  are usually *strings*.
* *Ordered*: all the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string.
* Values tend only to be associated with leaves, and with some inner nodes that correspond to keys of interest.
* *Empty root node*: top node or root typically equals an empty string.
* Each node stores a character or a word (spaces are treated as characters too).

## Strenghts and Weaknesses

* **Strenghts**:
  * *Efficient Prefix Queries*: good for problems involving strings. Tries
    allows us to store and find if a text contains a word or use an autocomplete
    feature.
  * *Fast operations*: insertion and deletion are very fast (`O(log(n))`).
  * *Space Efficient (sometimes)*: prefixes are stored in only 1 location, so duplicates
    aren't stored (may reduce overall storage cost).
* **Weaknesses**:
  * *Space Inefficient*: tries **rarely** save space when compared to storing
    strings in a set. ASCII characters in a string are one byte each. Each link between trie nodes is a pointer to an address—eight bytes on a 64-bit system. So, the overhead of linking nodes together often outweighs the savings from storing fewer characters.
  * *Not Standard*: most languages don't come with a built-in trie implementation.

## Tries vs. Hash Tables

* Although hash table has `O(1)` time complexity for looking for a key, it is not efficient in the following operations:
  * Finding all keys with a common prefix.
  * Enumerating a dataset of strings in lexicographical order.
* When a hash table increases in size, hash collisions and the search time complexity could deteriorate to `O(n)`, where `n` is the number of keys inserted. Trie could use less space compared to Hash Table when storing many keys with the same prefix. In this case using trie has only `O(m)` time complexity, where `m` is the key length. Searching for a key in a balanced tree costs `O(m * log(n))` time complexity.

## Tries vs. Sets

* Both options have the same average-case lookup complexity: `O(m)`, where `m` is the number of characters in the lookup string:
  * For the *trie*, you'd have to walk from the root of the trie through kk nodes, one character at a time.
  * For the *set*, you have to compute a hash value from all kk characters of the string in order to index into the underlying array.
* Use a *trie* if you want to quickly find words starting with the same prefix.
  Example: suggesting corrections (i.e.: fixing "chocolatr" to "chocolate"). The
  only way to do this with a set would be to iterate through all the words, in
  `O(n)` time.
* Use a *hash set* if you just need to check if a string is present or you're optimizing for space. In most cases, a hash set will take up fewer bytes than a trie. And, hash set lookups will probably be faster than trie lookups—trie nodes can be scattered throughout memory, which isn't cache friendly.

## Radix Trees

* **Radix tree**: is like a *trie*, but it *saves space* by combining nodes
  together if they only have one child (fewer overall nodes). Radix trees are more cache friendly than tries, since the characters within a single node are usually stored in an array of characters, adjacent to each other in memory.

## Optimizations

* Don´t look up each prefix from the root (build on past calls) by:
  * Keeping state within the trie.
  * Returning the node reference.

## Implementation

```java
class Node {
    HashMap(<Character, Node)
    boolean isCompleteWord
}
```

## Trie Operations

### Insertion

* We insert a key by searching into the trie. We start from the root and search a link, which corresponds to the first key character. There are two cases :
  1. *A link exists*: then we move down the tree following the link to the next child level. The algorithm continues with searching for the next key character.
  2. *A link does not exist*: then we create a new node and link it with the parent's link matching the current key character. We repeat this step until we encounter the last character of the key, then we mark the current node as an end node and the algorithm finishes.

```javascript
insert(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
        const currentChar = word.charAt(i)

        if (!node.keys.has(currentChar)) {
            node.keys.set(currentChar, new Node())
        }

        node = node.keys.get(currentChar)
    }

    node.setEnd()
}
```

### Search for a key in a trie

* Each key is represented in the trie as a path from the root to the internal node or leaf. We start from the root with the first key character. We examine the current node for a link corresponding to the key character. There are two cases:
  1. A link exist. We move to the next node in the path following this link, and proceed searching for the next key character.
  2. A link does not exist. If there are no available key characters and current node is marked as `isEnd` we return true. Otherwise there are possible two cases in each of them we return false:
     * There are key characters left, but it is impossible to follow the key path in the trie, and the key is missing.
     * No key characters left, but current node is not marked as `isEnd`. Therefore the search key is only a prefix of another key in the trie.

```javascript
// Search a prefix or whole key in trie and
// returns the node where search ends
searchPrefix(word) {
    let node = this.root

    for (let i = 0; i < word.length; i++) {
        const currentChar = word.charAt(i)

        if (node.keys.has(currentChar)) {
            node = node.keys.get(currentChar)
        } else {
            return null
        }
    }

    return node
}

// Returns if the word is in the trie
search(word) {
    const node = this.searchPrefix(word)
    // Check that the node exists and it is the end of the word
    return node !== null && node.isEnd()
}
```

### Search for a key in a trie

* The approach is very similar to the one we used for searching a key in a trie. We traverse the trie from the root, till there are no characters left in key prefix or it is impossible to continue the path in the trie with the current key character. The only difference with the mentioned above search for a key algorithm is that when we come to an end of the key prefix, we always return true. We don't need to consider the `isEnd` mark of the current trie node, because we are searching for a prefix of a key, not for a whole key.

```javascript
/*
    Search for a key prefix in a trie (searching for a prefix of a key, not for a whole key)
*/
startsWith(prefix) {
    const node = this.searchPrefix(prefix)

    return node !== null
}
```

## Resources

* [Trie - Wikipedia](https://en.wikipedia.org/wiki/Trie)
* [Data Structures: Tries - HackerRank](https://www.youtube.com/watch?v=zIjfhVPRZCg)
* [Trie Data Structure | Interview
  Cake](https://www.interviewcake.com/concept/java/trie)
* [Implement Trie (Prefix Tree) -
  LeetCode](https://leetcode.com/problems/implement-trie-prefix-tree/solution/)
* [Trie Data Structure - Beau teaches JavaScript -
  YouTube](https://www.youtube.com/watch?v=7XmS8McW_1U)
* [The Trie data structure - Ben's
  Blog](https://blog.benoitvallon.com/data-structures-in-javascript/the-trie-data-structure/)
* [Trie - Wikiwand](https://www.wikiwand.com/en/Trie)
* [The Trie data structure - Ben's Blog](https://blog.benoitvallon.com/data-structures-in-javascript/the-trie-data-structure/)
