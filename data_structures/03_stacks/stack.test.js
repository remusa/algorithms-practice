const stackArray = require('./stack_array_implementation')
const stackLinkedList = require('./stack_linked_list_implementation')

describe('Stack (array) tests', () => {
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

describe('Stack (linked list) tests', () => {
    it('should perform the operations on a stack (array implementation)', () => {
        const myStack = new stackLinkedList.Stack()

        myStack.push(7)
        expect(myStack.getValues()).toEqual([7])
        myStack.push(3)
        expect(myStack.getValues()).toEqual([3, 7])
        myStack.push(6)
        expect(myStack.getValues()).toEqual([6, 3, 7])

        expect(myStack.pop().value).toEqual(6)
        expect(myStack.getValues()).toEqual([3, 7])

        expect(myStack.peek().value).toEqual(3)

        myStack.push(8)
        expect(myStack.getValues()).toEqual([8, 3, 7])
        myStack.push(9)
        expect(myStack.getValues()).toEqual([9, 8, 3, 7])
        myStack.push(1)
        expect(myStack.getValues()).toEqual([1, 9, 8, 3, 7])

        expect(myStack.pop().value).toEqual(1)
        expect(myStack.getValues()).toEqual([9, 8, 3, 7])
        expect(myStack.pop().value).toEqual(9)
        expect(myStack.getValues()).toEqual([8, 3, 7])
    })
})
