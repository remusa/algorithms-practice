const fn = require('./reverse_string')

describe('test palindrome (string reversal)', function() {
  it('should reverse string array', () => {
    expect(fn.reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
      'o',
      'l',
      'l',
      'e',
      'h',
    ])
    expect(fn.reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
      'h',
      'a',
      'n',
      'n',
      'a',
      'H',
    ])
  })
})
