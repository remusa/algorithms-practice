import { zerosToEnd, zerosToEndNaive } from '../day_49_zeros_to_the_end'

describe('zeros to the end tests', () => {
    it('should move the zeros to the end of the array', () => {
        expect(zerosToEndNaive([])).toEqual([])
        expect(zerosToEndNaive([0])).toEqual([0])
        expect(zerosToEndNaive([1, 0, 2, 0, 4, 0])).toEqual([1, 2, 4, 0, 0, 0])
        expect(zerosToEndNaive([4, 13, 0, 2, 0, 0, 15, 0])).toEqual([4, 13, 2, 15, 0, 0, 0, 0])
    })

    it('should move the zeros to the end of the array', () => {
        expect(zerosToEnd([])).toEqual([])
        expect(zerosToEnd([0])).toEqual([0])
        expect(zerosToEnd([1, 0, 2, 0, 4, 0])).toEqual([1, 2, 4, 0, 0, 0])
        expect(zerosToEnd([1, 0, 2, 0, 4, 0])).toEqual([1, 2, 4, 0, 0, 0])
        expect(zerosToEnd([1, 0, 0, 0, 2, 4])).toEqual([1, 2, 4, 0, 0, 0])
        expect(zerosToEnd([4, 13, 0, 2, 0, 0, 15, 0])).toEqual([4, 13, 2, 15, 0, 0, 0, 0])
    })
})
