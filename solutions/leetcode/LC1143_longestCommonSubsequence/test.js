import { longestCommonSubsequence } from './index'

it('should return the longest common subsequence if it exists or 0', () => {
  const examples = [
    {
      input: { text1: 'abcde', text2: 'ace' },
      output: 3,
    },
    {
      input: { text1: 'abc', text2: 'abc' },
      output: 3,
    },
    {
      input: { text1: 'abc', text2: 'def' },
      output: 0,
    },
  ]

  examples.forEach(({ input: { text1, text2 }, output }) => {
    expect(longestCommonSubsequence(text1, text2)).toEqual(output)
  })
})
