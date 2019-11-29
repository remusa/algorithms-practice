import { treatsDistribution } from '../day_22_treats_distribution'

describe('treats distribution tests', () => {
  it('should return the maximum number of unique kinds of snacks the sister could gain', () => {
    expect(treatsDistribution([])).toBe(0)
    expect(treatsDistribution([1])).toBe(1)
    expect(treatsDistribution([1, 1])).toBe(2)

    expect(treatsDistribution([2, 2, 3, 3, 4, 4])).toBe(3)
    expect(treatsDistribution([1, 1, 2, 4])).toBe(2)
    expect(treatsDistribution([7, 7])).toBe(2)
  })
})
