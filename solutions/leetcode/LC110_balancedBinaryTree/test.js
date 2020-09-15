import { isBalanced, isBalanced2, isBalanced3 } from './index'

describe('balanced binary tree', () => {
  it('returns all possible subsets', () => {
    const examples = [
      {
        input: [3, 9, 20, null, null, 15, 7],
        output: true,
      },
      {
        input: [1, 2, 2, 3, 3, null, null, 4, 4],
        output: false,
      },
      {
        input: [1, 2, 2, 3, null, null, 3, 4, null, null, 4],
        output: false,
      },
    ]

    examples.forEach(({ input, output }) => {
      expect(isBalanced(input)).toEqual(output)
      expect(isBalanced2(input)).toEqual(output)
      expect(isBalanced3(input)).toEqual(output)
    })
  })
})
