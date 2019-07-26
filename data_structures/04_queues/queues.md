# Queues

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| enqueue   | `O(1)`     |
| dequeue   | `O(1)`     |
| peek      | `O(1)`     |

* **Queues**: stores items in a first-in, first-out (*FIFO*) order.
* **Uses**:
  * *Breadth-first search*: uses a queue to keep track of which nodes to visit next.
  * *Printers*: use queues to manage jobs—jobs get printed in the order they're submitted.
  * *Web servers*: use queues to manage requests—page requests get fulfilled in the order they're received.
  * *Processes*: wait in the CPU scheduler's queue for their turn to run.

## Strengths and Weaknesses

* **Strengths**:
  * *Fast operations*: all queue operations take  `O(1)` time.

## Queue Implementation

* Queues are implemented with *linked lists* (*dynamic arrays* are possible but messy).
  * To *enqueue*, insert at the tail of the linked list.
  * To *dequeue*, remove at the head of the linked list.
* Using *dynamic arrays* means we have to shift the elements every time and
  element is added at the beginning`O(n)`. Removing elements is still `O(1)`.

## Resources

* [Queue Data Structure | Interview Cake](https://www.interviewcake.com/concept/python/queue?)
