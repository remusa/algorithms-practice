# Priority Queue

| Operation | Worst case  |
| --------- | ----------- |
| space     | `O(n)`      |
| search    | `O(log(n))` |
| insert    | `O(log(n))` |
| delete    | `O(log(n))` |

- **Priority queue**: abstract data type similar to a regular queue or stack, but where each element
  has a _priority_.
- _Priority-based output_: elements with high priority are served before an element with low
  priority.
- If two elements have the same priority, they are served according to their order in the queue.
- Typically implemented using _binary heaps_, but being an abstract data type it can be implemented
  using other data structures, like an _unordered array_.

- **Construction**:

  - Write a min binary heap - lower number means higher priority.
  - Each node has a val and a priority. Use the priority to build the heap.
  - `Enqueue` method accepts a value and priority, makes a new node, and puts it in the right spot
    based off of its priority.
  - `Dequeue` method removes root element, returns it, and rearranges heap using priority.

- We can sort an array in `O(n log n)` time and `O(1)` space by making it a _heap_:

  - Make the array a max heap (use `maxHeapify`)
  - Loop over the array, swap the root node with last item in the array.
  - After swapping each item, run `maxHeapify` again to find the next root node.
  - Next loop you'll swap the root node with the second-to-last item in the array and run
    `maxHeapify` again.
  - Once you've run out of items to swap, you have a sorted array.

- **MaxHeapify**: convert an array into a `MaxBinaryHeap`:
  - Create a new heap.
  - Iterate over the array and invoke the `insert` function.
  - return the values property on the heap.

## Resources

- [Priority queue - Wikipedia](https://en.wikipedia.org/wiki/Priority_queue)
- [Priority Queue Introduction - YouTube](https://www.youtube.com/watch?v=wptevk0bshY)
- [Implementation of Priority Queue in Javascript - GeeksforGeeks](https://www.geeksforgeeks.org/implementation-priority-queue-javascript/)
- [javascript-algorithms/src/data-structures/priority-queue/**test** at master · zero-to-mastery/javascript-algorithms](https://github.com/zero-to-mastery/javascript-algorithms/tree/master/src/data-structures/priority-queue/__test__)
