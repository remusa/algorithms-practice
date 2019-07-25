import { quickSort } from './quick_sort'

describe('quick sort tests', () => {
    it('should return sorted array using quick sort', () => {
        expect(quickSort([2, 3, 1], 0, 2)).toEqual([1, 2, 3])
        expect(quickSort([9, 5, 8, 7, 2, 6, 1, 3, 4], 0, 8)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(quickSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0], 0, 10)).toEqual([
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
