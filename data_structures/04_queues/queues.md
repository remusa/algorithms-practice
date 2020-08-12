# Queues

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| enqueue   | `O(1)`     |
| dequeue   | `O(1)`     |
| peek      | `O(1)`     |

- **Queues**: stores items in a first-in, first-out (_FIFO_) order.
- **Uses**:
  - _Breadth-first search_: uses a queue to keep track of which nodes to visit next.
  - _Printers_: use queues to manage jobs—jobs get printed in the order they're submitted.
  - _Web servers_: use queues to manage requests—page requests get fulfilled in the order they're
    received.
  - _Processes_: wait in the CPU scheduler's queue for their turn to run.

## Strengths and Weaknesses

- **Strengths**:
  - _Fast operations_: all queue operations take `O(1)` time.

## Queue Implementation

- Queues are implemented with _linked lists_ (_dynamic arrays_ are possible but messy).
  - To _enqueue_, insert at the tail of the linked list.
  - To _dequeue_, remove at the head of the linked list.
- Using _dynamic arrays_ means we have to shift the elements every time and element is added at the
  beginning`O(n)`. Removing elements is still `O(1)`.

## Resources

- [Queue Data Structure | Interview Cake](https://www.interviewcake.com/concept/python/queue?)
