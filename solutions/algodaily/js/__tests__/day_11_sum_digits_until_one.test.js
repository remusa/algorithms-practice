import { sumDigits, sumDigits2 } from '../day_11_sum_digits_until_one'

describe('sum digits tests', function() {
    it('should return the sum of all digits', () => {
        expect(sumDigits()).toEqual(null)
        expect(sumDigits(1)).toEqual(1)
        expect(sumDigits(49)).toEqual(4)
        expect(sumDigits(439230)).toEqual(3)
    })
})

describe('sumDigits2 tests', function() {
    it('should return the sum of all digits', () => {
        expect(sumDigits2()).toEqual(null)
        expect(sumDigits2(1)).toEqual(1)
        expect(sumDigits2(49)).toEqual(4)
        expect(sumDigits2(439230)).toEqual(3)
    })
})
