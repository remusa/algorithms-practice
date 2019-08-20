import { stockOptimizer } from '../day_43_stock_buy_and_sell_optimization'

describe('stock optimization tests', () => {
    it('should return the value of the max profit after buying and selling stock', () => {
        expect(stockOptimizer([10, 7, 6, 2, 9, 4])).toBe(7)
        expect(stockOptimizer(stockOptimizer([9, 8, 6, 5, 3]))).toBe(0)
        expect(stockOptimizer([14, 20, 9])).toBe(6)
        expect(stockOptimizer([5, 20, 15, 13, 3, 15, 5, 10])).toBe(15)
        expect(stockOptimizer([1, 6, 11, 2])).toBe(10)
        expect(stockOptimizer([15, 5, 2, 0, 5, 8, 7, 4, 2, 10, 1])).toBe(10)
        expect(stockOptimizer([14, 3, 16, 8, 9, 7, 8, 18, 15, 10, 9])).toBe(15)
    })
})
