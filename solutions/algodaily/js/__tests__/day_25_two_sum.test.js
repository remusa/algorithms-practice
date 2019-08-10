import { twoSumNaive, twoSum } from '../day_25_two_sum'

describe('two sum tests', () => {
    it('twoSumNaive', () => {
        expect(twoSumNaive([], 10)).toEqual([])
        expect(twoSumNaive([1, 3, 6, 7, 9], 10)).toEqual([0, 4])
        expect(twoSumNaive([1, 9, 13, 20, 47], 10)).toEqual([0, 1])
        expect(twoSumNaive([3, 2, 4, 1, 9], 12)).toEqual([0, 4])
        expect(twoSumNaive([3, 2, 4, 1, 9], 20)).toEqual([])
    })

    it('should return an array with the indices of the two numbers that return the desired sum', () => {
        expect(twoSum([], 10)).toEqual([])
        expect(twoSum([1, 3, 6, 7, 9], 10)).toEqual([0, 4])
        expect(twoSum([1, 9, 13, 20, 47], 10)).toEqual([0, 1])
        expect(twoSum([3, 2, 4, 1, 9], 12)).toEqual([0, 4])
        expect(twoSum([3, 2, 4, 1, 9], 20)).toEqual([])
    })
})
