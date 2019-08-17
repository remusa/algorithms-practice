import { TwoStackQueue } from '../day_65_two_stack_queue'

describe('two stack queue tests', () => {
    it('should perform the operations on a queue made using two stacks', () => {
        const tsq = new TwoStackQueue()

        expect(tsq.push(1)).toEqual([1])
        expect(tsq.push(2)).toEqual([1, 2])

        expect(tsq.pop()).toBe(1)
        expect(tsq.pop()).toBe(2)

        expect(tsq.input).toEqual([])
        expect(tsq.output).toEqual([])

        expect(tsq.push(5)).toEqual([5])
        expect(tsq.push(6)).toEqual([5, 6])
        expect(tsq.push(7)).toEqual([5, 6, 7])

        expect(tsq.pop()).toBe(5)
        expect(tsq.pop()).toBe(6)

        expect(tsq.input).toEqual([])
        expect(tsq.output).toEqual([7])

        expect(tsq.push(8)).toEqual([8])

        expect(tsq.input).toEqual([8])
        expect(tsq.output).toEqual([7])

        expect(tsq.pop()).toBe(7)

        expect(tsq.input).toEqual([8])
        expect(tsq.output).toEqual([])
    })
})
