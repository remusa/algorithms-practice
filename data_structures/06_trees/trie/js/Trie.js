import TrieNode from './trieNode'

const HEAD_CHARACTER = '*'

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER)
  }

  addWord(word) {
    const characters = Array.from(word)
    let currentNode = this.head

    for (let charIndex = 0; charIndex < characters.length; charIndex++) {
      const isComplete = charIndex === characters.length - 1
      currentNode = currentNode.addChild(characters[charIndex], isComplete)
    }
  }

  suggestNextCharacters(word) {
    const lastCharacter = this.getLastCharacterNode(word)

    if (!lastCharacter) {
      return null
    }

    return lastCharacter.suggestChildren()
  }

  doesWordExist(word) {
    return !!this.getLastCharacterNode(word)
  }

  getLastCharacterNode(word) {
    const characters = Array.from(word)
    let currentNode = this.head

    for (let charIndex = 0; charIndex < characters.length; charIndex++) {
      const character = characters[charIndex]

      if (!currentNode.hasChild(character)) {
        return null
      }

      currentNode = currentNode.getChild(character)
    }
  }
}
