import { searchInsert } from './index'

it('should return the index if the target is found in a sorted array or where it would be inserted', () => {
  const examples = [
    { input: { nums: [1, 3, 5, 6], target: 5 }, output: 2 },
    { input: { nums: [1, 3, 5, 6], target: 2 }, output: 1 },
    { input: { nums: [1, 3, 5, 6], target: 7 }, output: 4 },
    { input: { nums: [1, 3, 5, 6], target: 0 }, output: 0 },
  ]

  examples.forEach(({ input: { nums, target }, output }) => {
    expect(searchInsert(nums, target)).toEqual(output)
  })
})
