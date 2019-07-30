import { majorityElement } from '../day_07_power_of_three'

describe('majority element tests', () => {
    it('should return the majority element in an array', () => {
        expect(majorityElement([1, 4, 2, 4, 4, 3, 4])).toEqual(4)
        expect(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])).toEqual(1)
    })
})
