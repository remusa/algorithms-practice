import { countingSort } from './counting_sort'

describe('counting sort tests', () => {
  it('should return sorted array using counting sort', () => {
    expect(countingSort([2, 3, 1])).toEqual([1, 2, 3])
    expect(countingSort([9, 5, 8, 7, 2, 6, 1, 3, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(countingSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])).toEqual([
      0,
      1,
      2,
      4,
      5,
      6,
      44,
      63,
      87,
      99,
      283,
    ])
  })
})
