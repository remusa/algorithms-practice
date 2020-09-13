import { subsets } from './index'

describe('balanced binary tree', () => {
  it('returns all possible subsets', () => {
    const examples = [
      {
        input: [1, 2, 3],
        output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
      },
    ]

    examples.forEach(({ input, output }) => {
      expect(subsets(input)).toEqual(output)
    })
  })
})
