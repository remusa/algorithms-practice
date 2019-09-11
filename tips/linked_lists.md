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

## Merge Two Sorted Lists

* Create a `dummyHead` node and have a current variable that points to that `dummyHead` at first.
* Check which of the values of the LLs is smaller, and have the `current` node point to the smaller value.
* Move `current` up to that node, and move the pointer of the bigger list one node.
* Keep going until we reach the end of one of the LLs.
* Point `current` to the rest of the remaining LL.

## Linked List Cycle

* Create a `slow` and `fast` variables and initialize them to the first node (`head`) of the linked-list.
* Iterate through the linked-list, move `slow` up one node and `fast` two nodes.
* If linked-list is circular (has a cycle), `slow` and `fast` will eventually equal each other.
* Otherwise, `fast` will just traverse to second to last or last node of the linked-list.

## Reverse Linked List

* Change the pointers to point to the other direction.
* Change the head to point to `null`.
* Use two pointers, `previous` initialized to `null` and `current` initialized to the head (first node) .
* Make `current` node `next` to point to `previous`.
* Move `previous` and `current` up one node.
* Repeat until `current` reaches the end of the list (it reaches `null`).
