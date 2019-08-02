import { missingInUnsorted } from '../day_16_missing_unsorted'

describe('uniqueness of arrays tests', () => {
    it('.toEqual(an array with the unique elements of the arrays', () => {
        expect(missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7], 1, 9)).toEqual(8)
    })
})
