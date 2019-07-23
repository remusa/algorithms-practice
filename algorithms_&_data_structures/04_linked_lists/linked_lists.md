# Linked Lists

* **Linked lists**: organizes items sequentially, with each item storing a
  pointer to the next one.
* **Node**: item in a linked list.
  * *Head*: first node of the list.
  * *Tail*: last node of the list.
* Used for *stacks* and *queues* because they only need fast operations on the ends.

## Linked Lists Operations

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| prepend   | `O(1)`     |
| append    | `O(1)`     |
| lookup    | `O(n)`     |
| insert    | `O(n)`     |
| delete    | `O(n)`     |

* **Strengths**:
  * *Fast operations on the ends*: adding elements at either end of a linked list is `O(1)`. Removing the first element is also `O(1)`.
  * *Flexible size*: there's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.
* **Weaknesses**:
  * *Costly lookups*: to access or edit an item in a linked list, you have to take
    `O(i)` time to walk from the head of the list to the `i`th item.
  * *Not cache-friendly*: array items are always located next to each other, but
    nodes in linked lists can be scattered, so iterating through the items in an
    array is slower even though they're both theoretically `O(n)` time.

## Doubly-Linked Lists

* In a *singly-linked list*, each item stores a single pointer to the next element.
* In a *doubly-linked list*, items have pointers to the next and the previous nodes.

* **Strengths**:
  * Doubly-linked lists allows us to traverse the list *backwards*.
