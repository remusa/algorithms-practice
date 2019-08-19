import { compactLength, compactLengthOptimized } from '../day_55_length_of_compact_string'

describe('length of compact string tests', () => {
    it('should return a compacted version of a string', () => {
        expect(compactLength('s')).toBe(1)
        expect(compactLength('abb')).toBe(3)
        expect(compactLength('aabbbbbbbbbbbbb')).toBe(5)
        expect(compactLength('sstttrrrr')).toBe(6)
    })

    it('should return a compacted version of a string', () => {
        expect(compactLengthOptimized('s')).toBe(1)
        expect(compactLengthOptimized('abb')).toBe(3)
        expect(compactLengthOptimized('aabbbbbbbbbbbbb')).toBe(5)
        expect(compactLengthOptimized('sstttrrrr')).toBe(6)
    })
})
