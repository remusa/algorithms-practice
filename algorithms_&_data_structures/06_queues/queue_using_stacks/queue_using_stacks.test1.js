const queueStacks = require('./queue_using_stacks')

// describe('Queue (using stacks) tests', () => {
//     it('should perform the operations on a queue (2 stacks implementation)', () => {
//         const myQueue = new queueStacks.QueueStacks()

//         expect(myQueue.peek()).toEqual(null)

//         myQueue.enqueue(7)
//         expect(myQueue.getValues()).toEqual([7])
//         myQueue.enqueue(3)
//         expect(myQueue.getValues()).toEqual([7, 3])
//         myQueue.enqueue(6)
//         expect(myQueue.getValues()).toEqual([7, 3, 6])

//         expect(myQueue.dequeue().value).toEqual(7)
//         expect(myQueue.getValues()).toEqual([3, 6])

//         expect(myQueue.peek().value).toEqual(3)

//         myQueue.enqueue(8)
//         expect(myQueue.getValues()).toEqual([3, 6, 8])
//         myQueue.enqueue(9)
//         expect(myQueue.getValues()).toEqual([3, 6, 8, 9])
//         myQueue.enqueue(1)
//         expect(myQueue.getValues()).toEqual([3, 6, 8, 9, 1])

//         expect(myQueue.dequeue().value).toEqual(3)
//         expect(myQueue.getValues()).toEqual([6, 8, 9, 1])
//         expect(myQueue.dequeue().value).toEqual(6)
//         expect(myQueue.getValues()).toEqual([8, 9, 1])

//         expect(myQueue.dequeue().value).toEqual(8)
//         expect(myQueue.dequeue().value).toEqual(9)
//         expect(myQueue.dequeue().value).toEqual(1)
//         expect(myQueue.dequeue()).toEqual(null)
//         expect(myQueue.dequeue()).toEqual(null)
//     })
// })
