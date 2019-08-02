import { uniques } from '../day_20_uniqueness_of_arrays'

describe('uniqueness of arrays tests', () => {
    it('.toEqual(an array with the unique elements of the arrays', () => {
        expect(uniques([3, 5, 6, 9, 9, 4, 3, 12])).toEqual([3, 5, 6, 9, 4, 12])
        expect(uniques([13, 5, 3, 5, 8, 13, 14, 5, 9])).toEqual([13, 5, 3, 8, 14, 9])
        expect(uniques([8, 8, 15, 6, 19, 7, 12, 6, 6, 3, 13, 9, 15, 14, 1, 13, 4, 11, 16])).toEqual(
            [8, 15, 6, 19, 7, 12, 3, 13, 9, 14, 1, 4, 11, 16]
        )
        expect(uniques([12, 7, 2, 20, 20, 2, 15, 20, 2, 10, 12, 1])).toEqual([
            12,
            7,
            2,
            20,
            15,
            10,
            1,
        ])
        expect(uniques([6, 12, 5, 1, 4, 18, 10, 17, 10, 0, 1, 7, 6, 18, 11, 2, 15, 19])).toEqual([
            6,
            12,
            5,
            1,
            4,
            18,
            10,
            17,
            0,
            7,
            11,
            2,
            15,
            19,
        ])
        expect(
            uniques([9, 0, 11, 16, 19, 14, 7, 18, 10, 6, 0, 17, 12, 9, 12, 18, 0, 14, 17])
        ).toEqual([9, 0, 11, 16, 19, 14, 7, 18, 10, 6, 17, 12])
        expect(uniques([5, 10, 3, 17, 9, 12, 19, 4, 16, 19, 7, 9, 7, 8, 10])).toEqual([
            5,
            10,
            3,
            17,
            9,
            12,
            19,
            4,
            16,
            7,
            8,
        ])
    })
})
