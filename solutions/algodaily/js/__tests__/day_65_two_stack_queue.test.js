import { TwoStackQueue } from '../day_65_two_stack_queue'

describe('two stack queue tests', () => {
    it('should perform the operations on a queue made using two stacks', () => {
        const tsq = new TwoStackQueue()
        expect(tsq.push(1)).toEqual([1])
        expect(tsq.push(2)).toEqual([1, 2])

        expect(tsq.pop()).toBe(1)
        expect(tsq.pop()).toBe(2)
    })
})
