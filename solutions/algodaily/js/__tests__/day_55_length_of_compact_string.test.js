import {
  compactLength,
  compactLengthO1,
} from '../day_55_length_of_compact_string'

describe('length of compact string tests', () => {
  it('should return a compacted version of a string', () => {
    expect(compactLength('s')).toBe(1)
    expect(compactLength('abb')).toBe(3)
    expect(compactLength('aabbbbbbbbbbbbb')).toBe(5)
    expect(compactLength('sstttrrrr')).toBe(6)
  })

  it('should return a compacted version of a string', () => {
    expect(compactLengthO1('s')).toBe(1)
    expect(compactLengthO1('abb')).toBe(3)
    expect(compactLengthO1('aabbbbbbbbbbbbb')).toBe(5)
    expect(compactLengthO1('sstttrrrr')).toBe(6)
  })
})
