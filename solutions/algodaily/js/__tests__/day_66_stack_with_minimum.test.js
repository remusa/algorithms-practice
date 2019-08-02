import { MinStack } from '../day_66_stack_with_minimum'

describe('stack with minimum implementation tests', () => {
    it('should perform the operations on a stack with a minimum', () => {
        const minStack = new MinStack()

        expect(minStack.peek()).toEqual(undefined)
        expect(minStack.min()).toEqual(undefined)

        expect(minStack.push(-2)).toEqual()
        expect(minStack.push(0)).toEqual()
        expect(minStack.push(-3)).toEqual()

        expect(minStack.min()).toEqual(-3)

        expect(minStack.pop()).toEqual(-3)

        expect(minStack.peek()).toEqual(0)

        expect(minStack.min()).toEqual(-2)
    })
})
