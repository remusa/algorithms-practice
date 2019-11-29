const fn = require('./factorial')

describe('factorial test', function() {
  it('should return factorial iteratively', () => {
    expect(fn.factorialIterative(5)).toEqual(120)

    expect(fn.factorialIterative(6)).toEqual(720)

    expect(fn.factorialIterative(7)).toEqual(5040)
  })

  it('should return factorial recursively', () => {
    expect(fn.factorialRecursive(5)).toEqual(120)

    expect(fn.factorialRecursive(6)).toEqual(720)

    expect(fn.factorialRecursive(7)).toEqual(5040)
  })
})
