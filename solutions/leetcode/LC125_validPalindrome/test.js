import { isPalindrome, isPalindrome2 } from './index'

it('should return true if a string is a valid palindrome', () => {
  const examples = [
    {
      input: 'A man, a plan, a canal: Panama',
      output: true,
    },
    {
      input: 'love',
      output: false,
    },
    {
      input: 'race a car',
      output: false,
    },
    {
      input: 'racecar',
      output: true,
    },
    {
      input: 'level',
      output: true,
    },
    {
      input: 'rotator',
      output: true,
    },
    {
      input: 'radar',
      output: true,
    },
    {
      input: '',
      output: true,
    },
    {
      input: '_a__',
      output: false,
    },
  ]

  examples.forEach(({ input, output }) => {
    expect(isPalindrome(input)).toEqual(output)
    expect(isPalindrome2(input)).toEqual(output)
  })
})
