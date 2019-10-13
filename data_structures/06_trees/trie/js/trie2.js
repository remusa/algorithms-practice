class Node {
    constructor(value) {
        this.value = value
        this.children = new Map()
        this.isCompleteWord = false
        this.prefixes = 0
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
















class Node {
    constructor(end = false) {
        this.children = new Map()
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
        else if (!node.children.has(input[0])) {
            node.children.set(input[0], new Node())
            return this.add(input.substr(1), node.children.get(input[0]))
        }
        // If there's already a node with that letter
        else {
            return this.add(input.substr(1), node.children.get(input[0]))
        }
    }

    find(input) {
        let node = this.root
        let word = input

        while (word.length > 1) {
            // If there isn't a node with that letter
            if (!node.children.has(word[0])) {
                return false
            }
            // Else, there must be a word with that letter
            // Update the node
            node = node.children.get(word[0])
            // Set the node to the first character
            word = word.substr(1)
        }

        if (node.children.has(word) && node.children.get(word).isEnd()) {
            return true
        }

        return false
    }

    remove(word) {}

    /*
        SECOND IMPLEMENTATION
    */

    insert(word) {
        let node = this.root

        for (let i = 0; i < word.length; i++) {
            const char = word[i]

            if (!node.children.has(char)) {
                node.children.set(char, new Node())
            }

            node = node.children.get(char)
        }

        node.setEnd()
    }

    // Search a prefix or whole key in trie and
    // returns the node where search ends
    searchPrefix(word) {
        let node = this.root

        for (let i = 0; i < word.length; i++) {
            const char = word[i]

            if (node.children.has(char)) {
                node = node.children.get(char)
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
        console.log('found? ', node !== null && node.isEnd())
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

trie.add('cherry')
// console.log(trie)
trie.search('cherry')

module.exports = {
    Trie,
}
