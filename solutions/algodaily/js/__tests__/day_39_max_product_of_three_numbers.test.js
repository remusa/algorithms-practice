import { maxProductOfThree } from '../day_39_max_product_of_three_numbers'

describe('max product of three numbers tests', () => {
  it('should return the largest product of three', () => {
    expect(maxProductOfThree([])).toBe(undefined)
    expect(maxProductOfThree([1, 2])).toBe(undefined)
    expect(maxProductOfThree([1, 2, 3])).toBe(6)

    expect(maxProductOfThree([10, 3, 5, 6, 20])).toBe(1200)
    expect(maxProductOfThree([-10, -3, -5, -6, -20])).toBe(-90)
    expect(maxProductOfThree([1, -4, 3, -6, 7, 0])).toBe(168)

    expect(maxProductOfThree([0, 1, 2, 3])).toBe(6)
    expect(maxProductOfThree([-12, -7, -1, 11, 17])).toBe(1428)
    expect(maxProductOfThree([0, 4, -9, 19, 7, -5])).toBe(855)
    expect(maxProductOfThree([-1, 9, 22, 3, -15, -7])).toBe(2310)
  })
})
