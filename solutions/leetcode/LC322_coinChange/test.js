import { coinChange, coinChange2 } from './index'

it('should return the max profit', () => {
  const examples = [
    {
      input: { nums: [1, 2, 5], amount: 11 },
      output: 3,
    },
    {
      input: { nums: [2], amount: 3 },
      output: -1,
    },
    {
      input: { nums: [2, 5, 10, 1], amount: 27 },
      output: 4,
    },
    {
      input: { nums: [2, 5, 10, 1], amount: 0 },
      output: 0,
    },
  ]

  examples.forEach(({ input: { nums, amount }, output }) => {
    expect(coinChange(nums, amount)).toEqual(output)
    expect(coinChange2(nums, amount)).toEqual(output)
  })
})
