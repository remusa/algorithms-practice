const stackArray = require('./stack_array_implementation')

describe('Singly Linked List tests', () => {
    it('should perform the operations on a stack (array implementation)', () => {
        const myStack = new stackArray.Stack()

        myStack.push(7)
        expect(myStack.getValues()).toEqual([7])
        myStack.push(3)
        expect(myStack.getValues()).toEqual([7, 3])
        myStack.push(6)
        expect(myStack.getValues()).toEqual([7, 3, 6])

        expect(myStack.pop()).toEqual(6)
        expect(myStack.getValues()).toEqual([7, 3])

        expect(myStack.peek()).toEqual(3)

        myStack.push(8)
        expect(myStack.getValues()).toEqual([7, 3, 8])
        myStack.push(9)
        expect(myStack.getValues()).toEqual([7, 3, 8, 9])
        myStack.push(1)
        expect(myStack.getValues()).toEqual([7, 3, 8, 9, 1])

        expect(myStack.pop()).toEqual(1)
        expect(myStack.getValues()).toEqual([7, 3, 8, 9])
        expect(myStack.pop()).toEqual(9)
        expect(myStack.getValues()).toEqual([7, 3, 8])
    })
})
