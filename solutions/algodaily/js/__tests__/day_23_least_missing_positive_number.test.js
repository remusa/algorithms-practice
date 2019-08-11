import { leastMissingPositive } from '../day_23_least_missing_positive_number'

describe('least missing positive number tests', () => {
    it('should return the smaller missing positive number', () => {
        expect(leastMissingPositive([])).toBe(1)
        expect(leastMissingPositive([3, 5, -1, 1])).toBe(2)
        expect(leastMissingPositive([5, 6, 7, 8, 9])).toBe(1)
    })
})
