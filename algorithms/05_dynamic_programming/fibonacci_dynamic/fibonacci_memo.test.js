const fn = require('./fibonacci_memo')

describe('fibonacci memoized tests', function() {
  it('should return correct fibonacci sequence value using memoization', () => {
    expect(fn.fibonacciMemoized(0)).toEqual(0)
    expect(fn.fibonacciMemoized(1)).toEqual(1)
    expect(fn.fibonacciMemoized(2)).toEqual(1)
    expect(fn.fibonacciMemoized(3)).toEqual(2)
    expect(fn.fibonacciMemoized(4)).toEqual(3)
    expect(fn.fibonacciMemoized(5)).toEqual(5)
    expect(fn.fibonacciMemoized(6)).toEqual(8)
    expect(fn.fibonacciMemoized(7)).toEqual(13)
    expect(fn.fibonacciMemoized(8)).toEqual(21)
  })

  it('should return correct fibonacci sequence value using bottom up approach', () => {
    expect(fn.fibonacciBottomUp(0)).toEqual(0)
    expect(fn.fibonacciBottomUp(1)).toEqual(1)
    expect(fn.fibonacciBottomUp(2)).toEqual(1)
    expect(fn.fibonacciBottomUp(3)).toEqual(2)
    expect(fn.fibonacciBottomUp(4)).toEqual(3)
    expect(fn.fibonacciBottomUp(5)).toEqual(5)
    expect(fn.fibonacciBottomUp(6)).toEqual(8)
    expect(fn.fibonacciBottomUp(7)).toEqual(13)
    expect(fn.fibonacciBottomUp(8)).toEqual(21)
  })
})
