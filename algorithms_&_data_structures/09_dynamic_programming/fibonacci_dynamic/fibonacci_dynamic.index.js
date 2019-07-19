const fn = require('./fibonacci_dynamic')

describe('fibonacci dynamic tests', function() {
    it('should return correct fibonacci sequence value', () => {
        expect(fn.fibonacciDynamic(0)).toEqual(0)
        expect(fn.fibonacciDynamic(1)).toEqual(1)
        expect(fn.fibonacciDynamic(2)).toEqual(1)
        expect(fn.fibonacciDynamic(3)).toEqual(2)
        expect(fn.fibonacciDynamic(4)).toEqual(3)
        expect(fn.fibonacciDynamic(5)).toEqual(5)
        expect(fn.fibonacciDynamic(6)).toEqual(8)
        expect(fn.fibonacciDynamic(7)).toEqual(13)
        expect(fn.fibonacciDynamic(8)).toEqual(21)
    })
})
