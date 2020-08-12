# Stacks

| Operation | Worst case |
| --------- | ---------- |
| space     | `O(n)`     |
| lookup    | `O(n)`     |
| push      | `O(1)`     |
| pop       | `O(1)`     |
| peek      | `O(1)`     |

- **Stacks**: stores items in a last-in, first-out (_LIFO_) order.
- **Uses**:
  - _Depth-first search_: uses a stack to keep track of which nodes to visit next.
  - _Call stack_: the call stack is a stack that tracks function calls in a program. When a function
    returns, we "pop" the last one that "pushed" a function call.
  - _String parsing_: stacks are useful for string parsing.

## Strengths and Weaknesses

- **Strengths**:
  - _Fast operations_: all stack operations take `O(1)` time.

## Stack Implementation

- Stacks can be implemented either with _linked lists_ or _dynamic arrays_.
  - Using _dynamic arrays_ is more _cache-friendly_ since the elements are next to each other in
    memory.
  - Using _linked lists_ is more _memory expensive_ due to having to hold the pointers.

|                | Stack Push     | Stack Pop           |
| -------------- | -------------- | ------------------- |
| Dynamic Arrays | append         | remove last element |
| Linked Lists   | insert at head | remove at head      |

## Resources

- [Stack Data Structure | Interview Cake](https://www.interviewcake.com/concept/python/stack?)
