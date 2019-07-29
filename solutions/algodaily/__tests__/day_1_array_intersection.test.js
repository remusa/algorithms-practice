import { arrayIntersection, arrayIntersection2 } from '../day_1_array_intersection'

describe('array arrayIntersection tests', function() {
    it('should return an array', () => {
        expect(arrayIntersection([1, 2, 2, 1], [2, 2])).toEqual([2])
        expect(arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])

        expect(arrayIntersection([6, 0, 12, 10, 16], [3, 15, 18, 20, 15])).toEqual([])
        expect(arrayIntersection([1, 5, 2, 12, 6], [13, 10, 9, 5, 8])).toEqual([5])
        expect(
            arrayIntersection([4, 17, 4, 4, 15, 16, 17, 6, 7], [15, 2, 6, 20, 17, 17, 8, 4, 5])
        ).toEqual([4, 6, 15, 17])
        expect(arrayIntersection([3], [15])).toEqual([])
        expect(arrayIntersection([2, 16, 8, 9], [14, 15, 2, 20])).toEqual([2])
    })
})
