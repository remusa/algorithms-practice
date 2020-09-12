import { sortArray } from './index'

describe('sortArray', () => {
  it('return true if output is the sorted input', () => {
    const examples = [
      {
        input: [5, 2, 3, 1],
        output: [1, 2, 3, 5],
      },
      {
        input: [5, 1, 1, 2, 0, 0],
        output: [0, 0, 1, 1, 2, 5],
      },
    ]

    examples.forEach(({ input, output }) => {
      expect(sortArray(input)).toEqual(output)
    })
  })
})
