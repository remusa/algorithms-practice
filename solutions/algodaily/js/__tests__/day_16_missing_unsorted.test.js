import { missingInUnsorted } from '../day_16_missing_unsorted'

describe('missing number in unsorted tests', () => {
  it('should return the missing element from the array', () => {
    expect(missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9)).toEqual(8)
    expect(missingInUnsorted([2, 5, 1, 4, 8, 6, 3, 7], 1, 9)).toEqual(9)
    expect(missingInUnsorted([2, 1, 9, 4, 8, 6, 3, 7], 1, 9)).toEqual(5)
  })
})
