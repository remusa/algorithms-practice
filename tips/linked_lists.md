# Linked Lists and Trees

## Nth Element of a Linked List

* Return the N-th element counting from the end.
* Initialize two pointers pointing at the first node.
* Move the right pointer to the right N nodes ahead.
* Move both pointers to the right until the right pointer points to null.
* Return the left pointer.

```
def nth_from_last(head, n):
    left = head
    right = head

    for i from 0 to n - 1:
        if right == null:
            return null

        right = right.child

    while right != null:
        right = right.child
        left = left.child

    return left
```

## Remove Nth Node From End of Linked List

* Create a `slow` and `fast` variables and initialize them to the first node of the linked-list.
* Move `fast` `n` nodes ahead of `slow`.
* Move both pointers up one node until the `fast` node reaches the end of the linked-list.
* Have `slow` point to his the `fast` node.
