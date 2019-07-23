# Stacks

* **Stacks**: stores items in a last-in, first-out (*LIFO*) order.
* **Uses**:
  * *Call stack*: the call stack is a stack that tracks function calls in a
    program. When a function returns, we "pop" the last one that "pushed" a
    function call.
  * *Depth-first search*: uses a stack to keep track of which nodes to visit next.
  * *String parsing*: stacks are useful for string parsing.

## Stack Operations

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| push      | `O(1)`     |
| pop       | `O(1)`     |
| peek      | `O(1)`     |

* **Strengths**:
  * *Fast operations*: all stack operations take  `O(1)` time.

## Stack Implementation

* Stacks can be implemented either with a *linked list* or a *dynamic array*.

|                | Stack Push     | Stack Pop           |
| -------------- | -------------- | ------------------- |
| Linked Lists   | insert at head | remove at head      |
| Dynamic Arrays | append         | remove last element |
