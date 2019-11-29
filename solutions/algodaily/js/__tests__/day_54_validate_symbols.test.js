import { validateSymbols, validateSymbols2 } from '../day_54_validate_symbols'

describe('validate symbols tests', function() {
  it('should return whether the characters are valid or not', () => {
    expect(validateSymbols2('[]')).toEqual(true)
    expect(validateSymbols2('{{[]}}')).toEqual(true)
    expect(validateSymbols2('[[}}')).toEqual(false)
  })
})
