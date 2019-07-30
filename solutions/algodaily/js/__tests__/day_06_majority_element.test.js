import { majorityElement, majorityElement2 } from '../day_06_majority_element'

describe('majority element tests', () => {
    // O(n) solution
    it('should return the majority element in an array', () => {
        expect(majorityElement([1, 4, 2, 4, 4, 3, 4])).toEqual(4)
        expect(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])).toEqual(1)
    })

    // O(n log(n)) solution
    it('should return the majority element in an array', () => {
        expect(majorityElement2([1, 4, 2, 4, 4, 3, 4])).toEqual(4)
        expect(majorityElement2([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1])).toEqual(1)
    })
})
