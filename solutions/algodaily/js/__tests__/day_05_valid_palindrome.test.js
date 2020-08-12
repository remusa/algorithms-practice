import { isPalindrome, isPalindrome2, isPalindrome3 } from '../day_05_valid_palindrome'

describe('isAnagram tests', function () {
  it('should return the correct values', () => {
    expect(isPalindrome('gold')).toEqual(false)
    expect(isPalindrome('a')).toEqual(true)
    expect(isPalindrome('racecar')).toEqual(true)
    // expect(isPalindrome('A Santa Lived As a Devil At NASA')).toEqual(true)
  })

  it('should return the correct values', () => {
    expect(isPalindrome2('gold')).toEqual(false)
    expect(isPalindrome2('a')).toEqual(true)
    expect(isPalindrome2('racecar')).toEqual(true)
    // expect(isPalindrome2('A Santa Lived As a Devil At NASA')).toEqual(true)
  })

  it('should return the correct values', () => {
    expect(isPalindrome3('gold')).toEqual(false)
    expect(isPalindrome3('a')).toEqual(true)
    expect(isPalindrome3('racecar')).toEqual(true)
    // expect(isPalindrome3('A Santa Lived As a Devil At NASA')).toEqual(true)
  })
})
