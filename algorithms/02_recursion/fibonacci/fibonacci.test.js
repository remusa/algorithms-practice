const fn = require('./fibonacci')

describe('fibonacci sequence tests', () => {
  it('should return value of fibonnaci sequence iteratively', () => {
    expect(fn.fibonacciIterative(0)).toEqual(0)
    expect(fn.fibonacciIterative(1)).toEqual(1)
    expect(fn.fibonacciIterative(2)).toEqual(1)
    expect(fn.fibonacciIterative(3)).toEqual(2)
    expect(fn.fibonacciIterative(4)).toEqual(3)
    expect(fn.fibonacciIterative(5)).toEqual(5)
    expect(fn.fibonacciIterative(6)).toEqual(8)
    expect(fn.fibonacciIterative(7)).toEqual(13)
    expect(fn.fibonacciIterative(8)).toEqual(21)
  })

  it('should return value of fibonnaci sequence recursively', () => {
    expect(fn.fibonacciRecursive(0)).toEqual(0)
    expect(fn.fibonacciRecursive(1)).toEqual(1)
    expect(fn.fibonacciRecursive(2)).toEqual(1)
    expect(fn.fibonacciRecursive(3)).toEqual(2)
    expect(fn.fibonacciRecursive(4)).toEqual(3)
    expect(fn.fibonacciRecursive(5)).toEqual(5)
    expect(fn.fibonacciRecursive(6)).toEqual(8)
    expect(fn.fibonacciRecursive(7)).toEqual(13)
    expect(fn.fibonacciRecursive(8)).toEqual(21)
  })
})
