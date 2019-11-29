import { isDollarDeleteEqual } from '../day_13_dollar_sign_deletion'

describe('dollar sign deletion tests', () => {
  it('should return whether two string are equal after removing $ and the previous character from the first', () => {
    expect(isDollarDeleteEqual(['f$st', 'st'])).toEqual(true)
    expect(isDollarDeleteEqual(['f$ec', 'ec'])).toEqual(true)
    expect(isDollarDeleteEqual(['ab$$', 'c$d$'])).toEqual(true)
    expect(isDollarDeleteEqual(['b$$p', '$b$p'])).toEqual(true)
  })
})
