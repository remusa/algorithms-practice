import { Trie } from '../day_80_implement_a_trie'

describe('trie implementation tests', () => {
    it('should perform the correct operations on a trie', () => {
        const trie = new Trie()

        trie.insert('cherry')
        trie.insert('cheetah')

        expect(trie.search('cherry')).toBe(true)
        expect(trie.search('sherry')).toBe(false)
        expect(trie.search('cheetah')).toBe(true)

        expect(trie.startsWith('che')).toBe(true)
        expect(trie.startsWith('s')).toBe(false)
    })
})
