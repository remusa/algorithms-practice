import { majorityElement, majorityElement2 } from '../day_06_majority_element'

describe('majority element tests', () => {
  // O(n) solution
  it('should return the majority element in an array', () => {
    expect(majorityElement([1, 4, 2, 4, 4, 3, 4])).toEqual(4)
    expect(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])).toEqual(1)
    expect(majorityElement([3, 2, 3])).toEqual(3)
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2)
  })

  // O(n log(n)) solution
  it('should return the majority element in an array', () => {
    expect(majorityElement2([1, 4, 2, 4, 4, 3, 4])).toEqual(4)
    expect(majorityElement2([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])).toEqual(1)
    expect(majorityElement2([3, 2, 3])).toEqual(3)
    expect(majorityElement2([2, 2, 1, 1, 1, 2, 2])).toEqual(2)
  })
})
