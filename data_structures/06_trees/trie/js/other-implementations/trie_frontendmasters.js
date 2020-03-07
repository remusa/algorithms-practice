class Trie {
  children = []

  value = ''

  terminus = false

  constructor(string) {
    this.value = string[0] || ''
    
    if (string.length > 1) {
      this.children.push(new Trie(string.substr(1)))
    } else {
      this.terminus = true
    }
  }

  add(string) {
    const value = string[0]
    const next = string.substr(1)

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]

      if (child.value === value) {
        if (next) {
          child.add(next)
        } else {
          child.terminus = true
        }
        return
      }
    }

    this.children.push(new Trie(string))
  }

  _complete(search, built, suggestions) {
    if (suggestions.length >= 3 || (search && search[0] !== this.value)) {
      return suggestions
    }

    if (this.terminus) {
      suggestions.push(`${built}${this.value}`)
    }

    this.children.forEach(child =>
      child._complete(search.substr(1), `${built}${this.value}`, suggestions)
    )

    return suggestions
  }

  complete(string) {
    return this.children
      .map(child => child._complete(string, '', []))
      .reduce((acc, item) => acc.concat(item))
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
