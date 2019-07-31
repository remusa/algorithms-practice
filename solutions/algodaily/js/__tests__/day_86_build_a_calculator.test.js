import { calculator } from '../day_86_build_a_calculator'

describe('calculator tests', function() {
    it('should return the correct evaluated value', () => {
        expect(calculator('2 + 2').toEqual(4)
        expect(calculator('(2+2) - 3').toEqual(1)
        expect(calculator('3 - 1 + 2').toEqual(4)
        expect(calculator('(2+(4+2)-1)-(5+8)').toEqual(-6)
    })
})
