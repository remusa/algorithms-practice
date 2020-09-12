import {
  reverseStringOneLiner,
  reverseStringIterative,
  reverseStringRecursive,
} from '../day_00_reverse_string'

describe('test palindrome (string reversal)', function () {
  it('should reverse string iteratively', () => {
    expect(reverseStringIterative('hello')).toEqual('olleh')
    expect(reverseStringIterative('Hello, World!')).toEqual('!dlroW ,olleH')
    expect(reverseStringIterative('njnschnjkdasn j32 uida')).toEqual('adiu 23j nsadkjnhcsnjn')
    expect(reverseStringIterative('timbuktu12')).toEqual('21utkubmit')
    expect(reverseStringIterative('')).toEqual('')
    expect(reverseStringIterative('reverseastring')).toEqual('gnirtsaesrever')
  })

  it('should reverse string recursively', () => {
    expect(reverseStringRecursive('hello')).toEqual('olleh')
    expect(reverseStringRecursive('Hello, World!')).toEqual('!dlroW ,olleH')
    expect(reverseStringRecursive('njnschnjkdasn j32 uida')).toEqual('adiu 23j nsadkjnhcsnjn')
    expect(reverseStringRecursive('timbuktu12')).toEqual('21utkubmit')
    expect(reverseStringRecursive('')).toEqual('')
    expect(reverseStringRecursive('reverseastring')).toEqual('gnirtsaesrever')
  })

  it('should reverse string using built in functions', () => {
    expect(reverseStringOneLiner('hello')).toEqual('olleh')
    expect(reverseStringOneLiner('Hello, World!')).toEqual('!dlroW ,olleH')
    expect(reverseStringOneLiner('njnschnjkdasn j32 uida')).toEqual('adiu 23j nsadkjnhcsnjn')
    expect(reverseStringOneLiner('timbuktu12')).toEqual('21utkubmit')
    expect(reverseStringOneLiner('')).toEqual('')
    expect(reverseStringOneLiner('reverseastring')).toEqual('gnirtsaesrever')
  })
})
