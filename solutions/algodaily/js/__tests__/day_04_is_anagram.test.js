import { isAnagram, isAnagram2 } from '../day_04_is_anagram'

describe('isAnagram tests', function () {
  it('should return the correct values', () => {
    expect(isAnagram('Mary', 'Army')).toEqual(true)
    expect(isAnagram('cinema', 'iceman')).toEqual(true)
    expect(isAnagram('jake', 'jay')).toEqual(false)
  })

  it('should return the correct values', () => {
    expect(isAnagram2('Mary', 'Army')).toEqual(true)
    expect(isAnagram2('cinema', 'iceman')).toEqual(true)
    expect(isAnagram2('jake', 'jay')).toEqual(false)
  })
})
