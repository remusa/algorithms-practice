import { getMinimum } from '../day_19_fast_minimum_in_rotated_array'

describe('fast minimum tests', () => {
  it('should return the pivot index where the array is rotated', () => {
    expect(getMinimum([6, 7, 8, 0, 1, 2, 3, 4, 5])).toBe(0)
    expect(getMinimum([6, 7, 8, 9, 10, 3, 4, 5])).toBe(3)
    expect(getMinimum([4, 5, 1, 2, 3])).toBe(1)
    expect(getMinimum([5, 6, 7, 0, 1, 2, 3])).toBe(0)
  })
})
