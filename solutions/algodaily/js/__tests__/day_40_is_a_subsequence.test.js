import { isASubsequence } from '../day_40_is_a_subsequence'

describe('is a subsequence tests', () => {
    it('should return whether a substring exists within a string', () => {
        expect(isASubsequence('hen', 'chicken')).toEqual(true)
        expect(isASubsequence('c', 'co')).toEqual(true)
        expect(isASubsequence('liblu', 'egi')).toEqual(false)
        expect(isASubsequence('ej', 'sej')).toEqual(true)
        expect(isASubsequence('zumkidin', 'hu')).toEqual(false)
        expect(isASubsequence('eviazauli', 'de')).toEqual(false)
    })
})
