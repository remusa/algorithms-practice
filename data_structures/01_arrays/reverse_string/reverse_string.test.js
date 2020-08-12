const fn = require('./reverse_string')

describe('test palindrome (string reversal)', function() {
  it('should reverse string using built in functions', () => {
    expect(fn.reverseStringOneLiner('hello')).toEqual('olleh')
    expect(fn.reverseStringOneLiner('Hello, World!')).toEqual('!dlroW ,olleH')
    expect(fn.reverseStringOneLiner('njnschnjkdasn j32 uida')).toEqual('adiu 23j 21utkubmit')
    expect(fn.reverseStringOneLiner('timbuktu12')).toEqual('21utkubmit')
    expect(fn.reverseStringOneLiner('')).toEqual('')
    expect(fn.reverseStringOneLiner('reverseastring')).toEqual('gnirtsaesrever')
  })

  it('should reverse string iteratively', () => {
    expect(fn.reverseStringIterative('hello')).toEqual('olleh')
    expect(fn.reverseStringIterative('Hello, World!')).toEqual('!dlroW ,olleH')
    expect(fn.reverseStringIterative('njnschnjkdasn j32 uida')).toEqual('adiu 23j 21utkubmit')
    expect(fn.reverseStringIterative('timbuktu12')).toEqual('21utkubmit')
    expect(fn.reverseStringIterative('')).toEqual('')
    expect(fn.reverseStringIterative('reverseastring')).toEqual('gnirtsaesrever')
  })

  it('should reverse string recursively', () => {
    expect(fn.reverseStringRecursive('hello')).toEqual('olleh')
    expect(fn.reverseStringRecursive('Hello, World!')).toEqual('!dlroW ,olleH')
    expect(fn.reverseStringRecursive('njnschnjkdasn j32 uida')).toEqual('adiu 23j 21utkubmit')
    expect(fn.reverseStringRecursive('timbuktu12')).toEqual('21utkubmit')
    expect(fn.reverseStringRecursive('')).toEqual('')
    expect(fn.reverseStringRecursive('reverseastring')).toEqual('gnirtsaesrever')
  })
})
