import { powerOfThree } from '../day_07_power_of_three'

describe('power of three tests', () => {
    it('should return true/false if number is power of three', () => {
        expect(powerOfThree(-3)).toEqual(false)
        expect(powerOfThree(0)).toEqual(false)
        expect(powerOfThree(1)).toEqual(false)
        expect(powerOfThree(2)).toEqual(false)
        expect(powerOfThree(3)).toEqual(true)
        expect(powerOfThree(9)).toEqual(true)
        expect(powerOfThree(7)).toEqual(false)
        expect(powerOfThree(729)).toEqual(true)
    })
})
