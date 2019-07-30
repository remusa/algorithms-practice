import { fibonacciBottomUp, fibonacciRecursiveMemo } from '../day_32_fibonacci'

describe('fibonacci sequence tests', function() {
    it('should return correct fibonacci sequence value using bottom up approach', () => {
        expect(fibonacciBottomUp(0)).toEqual(0)
        expect(fibonacciBottomUp(1)).toEqual(1)
        expect(fibonacciBottomUp(2)).toEqual(1)
        expect(fibonacciBottomUp(3)).toEqual(2)
        expect(fibonacciBottomUp(4)).toEqual(3)
        expect(fibonacciBottomUp(5)).toEqual(5)
        expect(fibonacciBottomUp(6)).toEqual(8)
        expect(fibonacciBottomUp(7)).toEqual(13)
        expect(fibonacciBottomUp(8)).toEqual(21)
        expect(fibonacciBottomUp(17)).toEqual(1597)
        expect(fibonacciBottomUp(34)).toEqual(5702887)
    })
})

describe('fibonacci sequence tests', function() {
    it('should return correct fibonacci sequence value using top-down approach (recursion)', () => {
        expect(fibonacciRecursiveMemo(0)).toEqual(0)
        expect(fibonacciRecursiveMemo(1)).toEqual(1)
        expect(fibonacciRecursiveMemo(2)).toEqual(1)
        expect(fibonacciRecursiveMemo(3)).toEqual(2)
        expect(fibonacciRecursiveMemo(4)).toEqual(3)
        expect(fibonacciRecursiveMemo(5)).toEqual(5)
        expect(fibonacciRecursiveMemo(6)).toEqual(8)
        expect(fibonacciRecursiveMemo(7)).toEqual(13)
        expect(fibonacciRecursiveMemo(8)).toEqual(21)
        expect(fibonacciRecursiveMemo(17)).toEqual(1597)
        expect(fibonacciRecursiveMemo(34)).toEqual(5702887)
    })
})
