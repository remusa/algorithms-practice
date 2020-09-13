import { subsets, subsets2 } from './index'

describe('subsets', () => {
  it('returns all possible subsets', () => {
    const examples = [
      {
        input: [1, 2, 3],
        output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      },
    ]

    examples.forEach(({ input, output }) => {
      expect(subsets(input)).toEqual(output)
      expect(subsets2(input)).toEqual(output)
    })
  })
})
