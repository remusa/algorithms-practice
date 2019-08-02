import { missingNumbers } from '../day_17_missing_numbers'

describe('missing number in sorted tests', () => {
    it('should return the missing elements from the array', () => {
        expect(missingNumbers([1, 2, 4, 5, 7])).toEqual([3, 6])
        expect(missingNumbers([0, 1, 3])).toEqual([2])
        expect(missingNumbers([10, 11, 14, 17])).toEqual([12, 13, 15, 16])
        expect(missingNumbers([3, 7, 9, 19])).toEqual([
            4,
            5,
            6,
            8,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
        ])
    })
})
