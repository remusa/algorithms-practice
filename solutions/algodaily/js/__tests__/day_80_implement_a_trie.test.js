import { Trie } from '../day_80_implement_a_trie'

describe('trie implementation tests', () => {
    it('should perform the correct operations on a trie', () => {
        const trie = new Trie()

        trie.insert('cherry')
        trie.insert('cheetah')
        expect(trie.search2('cherry')).toBe(true)
        expect(trie.search2('sherry')).toBe(false)
        expect(trie.search2('cheetah')).toBe(true)
        expect(trie.startsWith('che')).toBe(true)
        expect(trie.startsWith('s')).toBe(false)
    })
})
