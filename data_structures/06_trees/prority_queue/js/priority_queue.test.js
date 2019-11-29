import { PriorityQueue } from './priority_queue'

describe('priority queue tests', function() {
  it('should perform the correct operations on a priority queue', () => {
    const myPriorityQueue = new PriorityQueue()

    expect(myPriorityQueue.enqueue('common cold', 5)).toEqual({
      values: [{ priority: 5, value: 'common cold' }],
    })
    expect(myPriorityQueue.enqueue('gunshot wound', 1)).toEqual({
      values: [
        { priority: 1, value: 'gunshot wound' },
        { priority: 5, value: 'common cold' },
      ],
    })
    myPriorityQueue.enqueue('high fever', 4)
    myPriorityQueue.enqueue('broken arm', 2)
    myPriorityQueue.enqueue('glass in foot', 3)

    expect(myPriorityQueue.values.length).toEqual(5)

    expect(myPriorityQueue.dequeue()).toEqual({
      priority: 1,
      value: 'gunshot wound',
    })

    expect(myPriorityQueue.values.length).toEqual(4)
  })
})
