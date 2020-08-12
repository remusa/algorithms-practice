import { PriorityQueueMaxHeap } from './priority_queue_max_heap'
import { PriorityQueueMinHeap } from './priority_queue_min_heap'

describe('max heap priority queue tests', function() {
  it('should perform the correct operations on a max heap priority queue', () => {
    const pq = new PriorityQueueMaxHeap()

    pq.enqueue('common cold', 1)
    pq.enqueue('gunshot wound', 5)

    expect(pq.values).toEqual([
      { priority: 5, value: 'gunshot wound' },
      { priority: 1, value: 'common cold' },
    ])
    pq.enqueue('high fever', 4)
    pq.enqueue('broken arm', 2)
    pq.enqueue('glass in foot', 3)

    expect(pq.values.length).toEqual(5)

    expect(pq.dequeue()).toEqual({ priority: 5, value: 'gunshot wound' })

    expect(pq.values.length).toEqual(4)
  })
})

describe('min heap priority queue tests', function() {
  it('should perform the correct operations on a min heap priority queue', () => {
    const pq = new PriorityQueueMinHeap()

    pq.enqueue('common cold', 5)
    expect(pq.values).toEqual([{ priority: 5, value: 'common cold' }])

    pq.enqueue('gunshot wound', 1)
    expect(pq.values).toEqual([
      { priority: 1, value: 'gunshot wound' },
      { priority: 5, value: 'common cold' },
    ])
    pq.enqueue('high fever', 4)
    pq.enqueue('broken arm', 2)
    pq.enqueue('glass in foot', 3)

    expect(pq.values.length).toEqual(5)

    expect(pq.dequeue()).toEqual({
      priority: 1,
      value: 'gunshot wound',
    })
    expect(pq.values.length).toEqual(4)

    expect(pq.dequeue()).toEqual({
      priority: 2,
      value: 'broken arm',
    })
    expect(pq.values.length).toEqual(3)

    expect(pq.dequeue()).toEqual({
      priority: 3,
      value: 'glass in foot',
    })
    expect(pq.values.length).toEqual(2)

    expect(pq.dequeue()).toEqual({
      priority: 4,
      value: 'high fever',
    })
    expect(pq.values.length).toEqual(1)

    expect(pq.dequeue()).toEqual({
      priority: 5,
      value: 'common cold',
    })
    expect(pq.values.length).toEqual(0)
  })
})
