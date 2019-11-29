const fn = require('./recursive_power')

describe('recursive power tests', () => {
  it('should return the power of a number recursively', () => {
    expect(fn.power(3, 0)).toEqual(1)
    expect(fn.power(3, 1)).toEqual(3)
    expect(fn.power(3, 2)).toEqual(9)
    expect(fn.power(3, -1)).toEqual(1 / 3)
    expect(fn.power(3, 3)).toEqual(27)
    expect(fn.power(3, -3)).toEqual(1 / 27)
  })
})
