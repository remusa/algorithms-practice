import { firstUniqChar, firstUniqChar2 } from './index'

it('returns the first unique character in a string', () => {
  const examples = [
    {
      input: 'leetcode',
      output: 0,
    },
    {
      input: 'loveleetcode',
      output: 2,
    },
  ]

  examples.forEach(({ input, output }) => {
    expect(firstUniqChar(input)).toEqual(output)
    expect(firstUniqChar2(input)).toEqual(output)
  })
})
