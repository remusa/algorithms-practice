import { checkInclusion } from './index'

describe('checkInclusion', () => {
  it('return true if s2 contains the permutation of s1', () => {
    const examples = [
      {
        s1: 'ab',
        s2: 'eidbaooo',
        output: true,
      },
      {
        s1: 'ab',
        s2: 'eidboaoo',
        output: false,
      },
    ]

    examples.forEach(({ s1, s2, output }) => {
      expect(checkInclusion(s1, s2)).toBe(output)
    })
  })
})
