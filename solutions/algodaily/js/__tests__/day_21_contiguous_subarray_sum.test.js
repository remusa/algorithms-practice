import { subarraySum } from '../day_21_contiguous_subarray_sum'

describe('contiguous subarray sum tests', () => {
  it('should return if two contiguous elements in the subarray sum equals the goal', () => {
    expect(subarraySum([], 3)).toBe(false)
    expect(subarraySum([1, 2, 3], 3)).toBe(true)
    expect(subarraySum([1, 2, 3], 6)).toBe(false)
    expect(subarraySum([3, 6, 12, 35], 47)).toBe(true)
  })
})
