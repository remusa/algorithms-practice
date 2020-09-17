import { maxProfit, maxProfit2 } from './index'

it('should return the max profit', () => {
  const examples = [
    {
      input: [7, 1, 5, 3, 6, 4],
      output: 5,
    },
    {
      input: [7, 6, 4, 3, 1],
      output: 0,
    },
  ]

  examples.forEach(({ input, output }) => {
    expect(maxProfit(input)).toEqual(output)
    expect(maxProfit2(input)).toEqual(output)
  })
})
