import { maxOfMinPairs } from '../day_15_max_of_min_pairs'

describe('max of min pairs tests', () => {
    it('should return the maximum sum of pairs', () => {
        expect(maxOfMinPairs([3, 4, 2, 5])).toEqual(6)
        expect(maxOfMinPairs([1, 3, 2, 6, 5, 4])).toEqual(9)
    })
})
