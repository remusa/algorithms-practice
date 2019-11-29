import { sortedTwoSum } from '../day_42_sorted_two_sum'

describe('two sum tests', () => {
  it('twoSumNaive', () => {
    expect(sortedTwoSum([], 10)).toEqual([])
    expect(sortedTwoSum([1, 3, 7, 8, 11], 10)).toEqual([1, 2])
    expect(sortedTwoSum([1, 3, 6, 7, 9], 10)).toEqual([1, 3])
    expect(sortedTwoSum([1, 9, 13, 20, 47], 10)).toEqual([0, 1])
    expect(sortedTwoSum([1, 9, 13, 20, 47], 33)).toEqual([2, 3])
    expect(sortedTwoSum([1, 2, 3, 4, 9], 12)).toEqual([2, 4])
    expect(sortedTwoSum([1, 2, 3, 4, 9], 20)).toEqual([])
  })
})
