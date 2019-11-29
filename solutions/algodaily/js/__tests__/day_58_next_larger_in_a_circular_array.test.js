import { nextLargerNumber } from '../day_58_next_larger_in_a_circular_array'

describe('next larger in circular array tests', () => {
  it('should return the next immediate larger number for every element in the array', () => {
    expect(nextLargerNumber([3, 1, 3, 4])).toEqual([4, 3, 4, -1])
    expect(nextLargerNumber([4, 5, 2, 25])).toEqual([5, 25, 25, -1])
    expect(nextLargerNumber([13, 7, 6, 12])).toEqual([-1, 12, 12, -1])
    expect(nextLargerNumber([98, 23, 54, 12, 20, 7, 27])).toEqual([
      -1,
      54,
      98,
      20,
      27,
      27,
      -1,
    ])
  })
})
