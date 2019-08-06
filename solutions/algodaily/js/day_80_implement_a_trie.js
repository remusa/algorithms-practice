/*
    Suppose you're asked during an interview to design an autocompletion system. On the client side, you have an input box. When users start typing things into the input, it should parse what's been typed and make suggestions based on that.

    For example, if the user has typed "cat", we may fetch "cat", "category", and "catnip" as recommendations to display. This seems pretty simple-- we could just do a scan of all the words that start with "cat" and retrieve them. You can do this by storing the words in an array and doing a binary search in O(log n) time complexity, with n being the number of words to search through.

    But what if you have millions of words to retrieve and wanted to separate the search time from vocabulary size? A trie (for data reTRIEval), or prefix tree, would be what you want.
*/

class Node {
    constructor(end = false) {
        this.keys = new Map()
        this.end = end
    }

    setEnd() {
        this.end = true
    }

    isEnd() {
        return this.end
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    // recursive
    add(input, node = this.root) {
        // We are at the end of the word
        if (input.length === 0) {
            node.setEnd()
        }
        // If there's more than 0 letters passed to the add function (not at the
        // end)
        // If there's not a node with the letter passed, create a node with it
        else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node())
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
        // If there's already a node with that letter
        else {
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
    }

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

    search(input) {
        let node = this.root
        let word = input

        while (word.length > 1) {
            // If there isn't a node with that letter
            if (!node.keys.has(word[0])) {
                return false
            }
            // Else, there must be a word with that letter
            // Update the node
            node = node.keys.get(word[0])
            // Set the node to the first character
            word = word.substr(1)
        }

        if (node.keys.has(word) && node.keys.get(word).isEnd()) {
            return true
        }

        return false
    }

    remove(word) {}

    /*
        Search for a key in a trie
    */

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
    search2(word) {
        const node = this.searchPrefix(word)
        // Check that the node exists and it is the end of the word
        return node !== null && node.isEnd()
    }

    /*
        Search for a key prefix in a trie (searching for a prefix of a key, not for a whole key)
    */
    startsWith(prefix) {
        const node = this.searchPrefix(prefix)

        return node !== null
    }

    print() {
        const words = []

        function search(node = this.root, string) {
            if (node.keys.size !== 0) {
                search(node.keys.get(letter), string.concat(letter))
            }

            if (node.isEnd()) {
                words.push(string)
            } else if (string.length > 0) {
                words.push(string)
            } else {
                return undefined
            }
        }

        search(this.root, '')

        if (words.length > 0) {
            return words
        }

        return null
    }
}

const trie = new Trie()
trie.insert('cherry')
console.log(trie)
console.log(trie.search2('cherry'))

module.exports = {
    Trie,
}
