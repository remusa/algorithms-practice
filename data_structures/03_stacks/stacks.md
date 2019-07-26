# Stacks

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| lookup    | `O(n)`     |
| push      | `O(1)`     |
| pop       | `O(1)`     |
| peek      | `O(1)`     |

* **Stacks**: stores items in a last-in, first-out (*LIFO*) order.
* **Uses**:
  * *Depth-first search*: uses a stack to keep track of which nodes to visit next.
  * *Call stack*: the call stack is a stack that tracks function calls in a
    program. When a function returns, we "pop" the last one that "pushed" a
    function call.
  * *String parsing*: stacks are useful for string parsing.

## Strengths and Weaknesses

* **Strengths**:
  * *Fast operations*: all stack operations take  `O(1)` time.

## Stack Implementation

* Stacks can be implemented either with *linked lists* or *dynamic arrays*.
  * Using *dynamic arrays* is more *cache-friendly* since the elements are next to
    each other in memory.
  * Using *linked lists* is more *memory expensive* due to having to hold the pointers.

|                | Stack Push     | Stack Pop           |
| -------------- | -------------- | ------------------- |
| Dynamic Arrays | append         | remove last element |
| Linked Lists   | insert at head | remove at head      |

## Resources

* [Stack Data Structure | Interview Cake](https://www.interviewcake.com/concept/python/stack?)
