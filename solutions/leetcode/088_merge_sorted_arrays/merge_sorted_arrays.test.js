const fn = require('./merge_sorted_arrays')

describe('merge arrays tests', function() {
    it('should merge 2 arrays correctly', () => {
        expect(fn.mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])).toEqual([0, 3, 4, 4, 6, 30, 31])
        expect(fn.mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30])).toEqual([
            0,
            3,
            3,
            4,
            4,
            6,
            30,
            31,
        ])
        expect(fn.mergeSortedArrays([1, 2, 3], [2, 5, 6])).toEqual([1, 2, 2, 3, 5, 6])
    })
})
