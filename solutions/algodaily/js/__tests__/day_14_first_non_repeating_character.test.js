import { firstNonRepeat } from '../day_14_first_non_repeating_character'

describe('first non repeating character tests', function () {
  it('should return the first character in the string that does not repeat itself later no', () => {
    expect(firstNonRepeat('')).toEqual('')
    expect(firstNonRepeat('a')).toEqual('a')
    expect(firstNonRepeat('oh my god dude where is my car')).toEqual('g')
    expect(firstNonRepeat('asdfsdafdasfjdfsafnnunl')).toEqual('j')
  })
})
