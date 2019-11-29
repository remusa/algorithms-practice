/*
    Suppose you're asked during an interview to design an autocompletion system. On the client side, you have an input box. When users start typing things into the input, it should parse what's been typed and make suggestions based on that.

    For example, if the user has typed "cat", we may fetch "cat", "category", and "catnip" as recommendations to display. This seems pretty simple-- we could just do a scan of all the words that start with "cat" and retrieve them. You can do this by storing the words in an array and doing a binary search in O(log n) time complexity, with n being the number of words to search through.

    But what if you have millions of words to retrieve and wanted to separate the search time from vocabulary size? A trie (for data reTRIEval), or prefix tree, would be what you want.
*/

class Node {
  constructor(value) {
    this.value = value
    this.children = new Map()
    this.prefixes = 0
    this.isCompleteWord = false
  }
}

class Trie {
  constructor() {
    this.root = new Node('')
  }

  add(word) {
    if (!this.root) {
      return null
    }

    this._addNode(this.root, word)
  }

  _addNode(node, word) {
    if (!node || !word) {
      return null
    }

    node.prefixes++

    const char = word.charAt(0)
    let child = node.children.get(char)

    // If character doesn't have children
    if (!child) {
      child = new Node(char)
      node.children.set(char, child)
    }

    const restOfWord = word.substring(1)
    console.log('restOfWord', restOfWord)

    // If there're no more characters, word is finished
    if (!restOfWord) {
      child.isCompleteWord = true
    }

    this._addNode(child, restOfWord)
  }

  remove(word) {
    if (!this.root) {
      return null
    }

    if (this.root.children.has(word)) {
      this._removeNode(this.root, word)
    }
  }

  _removeNode(node, word) {
    if (!node || !word) {
      return undefined
    }

    node.prefixes--

    const char = word.charAt(0)
    const child = node.children.get(char)

    // If the character exists
    if (child) {
      const remainder = word.substring(1)

      // If there's more characters in the word
      if (remainder) {
        if (child.prefixes === 1) {
          node.children.delete(char)
        } else {
          this._removeNode(child, remainder)
        }
      }
      // This is the last character
      else {
        if (child.prefixes === 0) {
          node.children.delete(char)
        } else {
          child.isCompleteWord = false
        }
      }
    }
  }

  search(word) {
    if (!this.root) {
      console.log('found? ', false)
      return false
    }

    return this._search(this.root, word)
  }

  _search(node, word) {
    if (!node || !word) {
      console.log('found? ', false)
      return false
    }

    const char = word.charAt(0)
    const child = node.children.get(char)

    if (!child) {
      console.log('found? ', false)
      return false
    }

    const remainder = word.substring(1)

    if (!remainder && child.isCompleteWord) {
      console.log('found? ', true)
      return true
    }
    return this._search(child, remainder)
  }
}

const trie = new Trie()

trie.add('cherry')
console.log(trie)
trie.search('cherry')
trie.add('cherry')
trie.search('cheetos')
console.log(trie)

module.exports = {
  Trie,
}
