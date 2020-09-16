import { twoSum, twoSum2, twoSum3 } from './index'

it('returns the indices of the two numbers that add up to the target', () => {
  const examples = [
    { input: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
    { input: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
    { input: { nums: [3, 3], target: 6 }, output: [0, 1] },
  ]

  examples.forEach(({ input: { nums, target }, output }) => {
    expect(twoSum(nums, target).sort()).toEqual(output)
    expect(twoSum2(nums, target).sort()).toEqual(output)
    expect(twoSum3(nums, target).sort()).toEqual(output)
  })
})
