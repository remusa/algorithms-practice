import { lonelyNumber, lonelyNumber2 } from '../day_08_lonely_number'

describe('lonelyNumber tests', function() {
    it('should return the lonely number from an array', () => {
        expect(lonelyNumber([4, 4, 6, 1, 3, 1, 3])).toEqual(6)
        expect(lonelyNumber([3, 3, 9])).toEqual(9)
        expect(lonelyNumber([1])).toEqual(1)
    })

    it('should return the lonely number from an array', () => {
        expect(lonelyNumber2([4, 4, 6, 1, 3, 1, 3])).toEqual(6)
        expect(lonelyNumber2([3, 3, 9])).toEqual(9)
        expect(lonelyNumber2([1])).toEqual(1)
    })
})
