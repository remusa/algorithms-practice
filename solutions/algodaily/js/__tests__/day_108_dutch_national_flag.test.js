import { dutchNatFlag } from '../day_108_dutch_national_flag'

describe('Dutch national flag tests', function() {
    it('should return the correct evaluated value', () => {
        expect(dutchNatFlag([0, 1, 2])).toEqual([0, 1, 2])
        expect(dutchNatFlag([2, 0, 0, 1, 1, 0, 2, 2])).toEqual([0, 0, 0, 1, 1, 2, 2, 2])
        expect(dutchNatFlag([2, 2, 2, 0, 0, 0, 1, 1])).toEqual([0, 0, 0, 1, 1, 2, 2, 2])
        expect(dutchNatFlag([2, 0, 1, 0, 2])).toEqual([0, 0, 1, 2, 2])
    })
})
