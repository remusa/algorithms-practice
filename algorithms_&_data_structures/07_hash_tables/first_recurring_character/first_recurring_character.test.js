const fn = require('./first_recurring_character')

describe('first recurring character tests', () => {
    it('should return undefined', () => {
        expect(fn.firstRecurringCharacter([2, 3, 4, 5])).toEqual(undefined)
    })
    it('should return the first recurring character', () => {
        expect(fn.firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2)
        expect(fn.firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1)
    })
})
