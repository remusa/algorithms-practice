import { MaxBinaryHeap } from './heap'

describe('binary heap tests', function() {
    it('should perform the operations on a binary heap', () => {
        const heap = new MaxBinaryHeap()

        heap.insert(41)
        heap.insert(39)
        heap.insert(33)
        heap.insert(18)
        heap.insert(27)
        heap.insert(12)
        heap.insert(55)
    })
})
