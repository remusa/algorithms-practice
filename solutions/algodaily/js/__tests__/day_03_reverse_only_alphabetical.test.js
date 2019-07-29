import { reverseOnlyAlphabetical } from '../day_03_reverse_only_alphabetical'

describe('reverseOnlyAlphabetical tests', function() {
    it('should return the correct values', () => {
        expect(reverseOnlyAlphabetical('sea!$hells3')).toEqual('sll!$ehaes3')
        expect(reverseOnlyAlphabetical('1kas90jda3')).toEqual('1adj90sak3')
    })
})
