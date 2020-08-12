import { MaxBinaryHeap } from './max_binary_heap'

describe('binary heap tests', function() {
  it('should perform the operations on a binary heap', () => {
    const heap = new MaxBinaryHeap()

    heap.insert(41)
    heap.insert(39)
    heap.insert(33)
    heap.insert(18)
    expect(heap.values).toEqual([41, 39, 33, 18])
    heap.insert(27)
    heap.insert(12)
    expect(heap.values).toEqual([41, 39, 33, 18, 27, 12])

    heap.insert(55)
    expect(heap.values).toEqual([55, 39, 41, 18, 27, 12, 33])

    expect(heap.extractMax()).toEqual(55)
    expect(heap.values).toEqual([41, 39, 33, 18, 27, 12])

    expect(heap.extractMax()).toEqual(41)
    expect(heap.values).toEqual([39, 27, 33, 18, 12])

    expect(heap.extractMax()).toEqual(39)
    expect(heap.extractMax()).toEqual(33)
    expect(heap.extractMax()).toEqual(27)
    expect(heap.extractMax()).toEqual(18)
    expect(heap.values).toEqual([12])

    expect(heap.extractMax()).toEqual(12)
    expect(heap.extractMax()).toBe(undefined)
  })

  it('should perform the operations on a binary heap', () => {
    const heap = new MaxBinaryHeap()

    heap.insert(41)
    heap.insert(39)
    heap.insert(33)
    heap.insert(18)
    heap.insert(27)
    heap.insert(12)
    heap.insert(55)

    heap.remove(27)
    expect(heap.values).toEqual([55, 39, 41, 18, 33, 12])
  })
})
