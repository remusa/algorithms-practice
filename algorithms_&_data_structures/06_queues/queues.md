# Queues

* **Queues**: stores items in a first-in, first-out (*FIFO*) order.
* **Uses**:
  * *Breadth-first search*: uses a queue to keep track of which nodes to visit next.
  * *Printers*: use queues to manage jobs—jobs get printed in the order they're submitted.
  * *Web servers*: use queues to manage requests—page requests get fulfilled in the order they're received.
  * *Processes*: wait in the CPU scheduler's queue for their turn to run.

## Queue Operations

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| enqueue   | `O(1)`     |
| dequeue   | `O(1)`     |
| peek      | `O(1)`     |

* **Strengths**:
  * *Fast operations*: all queue operations take  `O(1)` time.

## Queue Implementation

* Queues are implemented with *linked lists* (*dynamic arrays* are possible but messy).
  * To *enqueue*, insert at the tail of the linked list.
  * To *dequeue*, remove at the head of the linked list.
