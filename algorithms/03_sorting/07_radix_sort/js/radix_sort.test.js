import { radixSort } from './radix_sort'

describe('radix sort tests', () => {
    it('should return sorted array using radix sort', () => {
        expect(radixSort([2, 3, 1])).toEqual([1, 2, 3])
        expect(radixSort([9, 5, 8, 7, 2, 6, 1, 3, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(radixSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])).toEqual([
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
