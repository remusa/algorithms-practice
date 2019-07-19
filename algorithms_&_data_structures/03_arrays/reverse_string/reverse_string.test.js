const fn = require('./reverse_string')

describe('test palindrome (string reversal)', function() {
    it('should reverse string using built in functions', () => {
        expect(fn.reverseStringOneLiner('hello')).toEqual('olleh')
        expect(fn.reverseStringOneLiner('Hello, World!')).toEqual('!dlroW ,olleH')
    })

    it('should reverse string iteratively', () => {
        expect(fn.reverseStringIterative('hello')).toEqual('olleh')
        expect(fn.reverseStringIterative('Hello, World!')).toEqual('!dlroW ,olleH')
    })

    it('should reverse string recursively', () => {
        expect(fn.reverseStringRecursive('hello')).toEqual('olleh')
        expect(fn.reverseStringRecursive('Hello, World!')).toEqual('!dlroW ,olleH')
    })
})
