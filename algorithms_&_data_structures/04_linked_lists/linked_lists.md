# Linked Lists

* **Linked lists**: organizes items sequentially, with each item storing a
  pointer to the next one.
* **Node**: item in a linked list.
  * 2 parts:
    * A *key*: the value.
    * The *next* pointer.
* **Head**: first node of the list.
* **Tail**: last node of the list.
* Used for *stacks* and *queues* because they only need fast operations on the ends.

## Linked Lists Operations

| Operation | Worst case | Doubly-Linked |
| --------- | ---------- | ------------- |
| space     | `O(n)`     | `O()`         |
| prepend   | `O(1)`     | `O()`         |
| append    | `O(1)`     | `O()`         |
| lookup    | `O(n)`     | `O()`         |
| insert    | `O(n)`     | `O()`         |
| delete    | `O(n)`     | `O()`         |

* **Strengths**:
  * *Fast operations on the ends*: adding and removing elements at either end of a linked list is `O(1)`.
  * *Flexible size*: there's no need to specify how many elements you're going to store ahead of time. You can keep adding elements as long as there's enough space on the machine.
  * *Ordered*: items can be ordered when they're being inserted.
* **Weaknesses**:
  * *Costly lookups*: to access or edit an item in a linked list, you have to take
    `O(i)` time to walk from the head of the list to the `i`th item.
  * *Not cache-friendly*: array items are always located next to each other, but
    nodes in linked lists can be scattered, so iterating through the items in an
    array is slower even though they're both theoretically `O(n)` time.

## Pointer

* **Pointer**: reference to an object.

```javascript
let obj1 = { a: true }
let obj2 = obj1   // 'obj2' "points" to the same location in memory as 'obj1', so both hold the same values (when 'obj1' is modified so is 'obj2')
console.log(`1`, obj1)
console.log(`2`, obj2)

// prints
// 1 { a: true }
// 2 { a: true }

obj1.a = 'hello'
console.log(`1`, obj1)
console.log(`2`, obj2)
// prints
// 1 { a: 'hello' }
// 2 { a: 'hello' }

delete obj1
obj2.a = 'world'
console.log(`2`, obj2)
// prints
// 2 { a: 'hello' }
// undefined because it points to the location of 'obj1' but it's been deleted
```

### Singly Linked List Implementation

* Append:

```
Append(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    tail.next ← n
    tail ← n
  end if
end Append
```

* Prepend:

```
Prepend(value)
 Pre: value is the value to add to the list
 Post: value has been placed at the head of the list
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

* Lookup:

```
Contains(head, value)
  Pre: head is the head node in the list
       value is the value to search for
  Post: the item is either in the linked list, true; otherwise false
  n ← head
  while n != ø and n.value != value
    n ← n.next
  end while
  if n = ø
    return false
  end if
  return true
end Contains
```

* Delete:

```
Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true, otherwise false
  if head = ø
    return false
  end if
  n ← head
  if n.value = value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
    end if
    return true
  end if
  while n.next != ø and n.next.value != value
    n ← n.next
  end while
  if n.next != ø
    if n.next = tail
      tail ← n
    end if
    n.next ← n.next.next
    return true
  end if
  return false
end Remove
```

* Traverse:

```
Traverse(head)
  Pre: head is the head node in the list
  Post: the items in the list have been traversed
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

## Doubly-Linked Lists

* In a *singly-linked list*, each item stores a single pointer to the `next` element.
* In a *doubly-linked list*, items have pointers to the `next` and the `previous` nodes.

* **Strengths**:
  * *Traverse from both directions*: doubly-linked lists allows us to traverse the list *backwards*.
  * *Search from both directions*: can search from both sides.
* **Weaknesses**:
  * *Space complexity*: doubly-linked lists take more space because of the added `previous` pointer.

### Doubly Linked List Implementation

* Insert:

```
Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    n.previous ← tail
    tail.next ← n
    tail ← n
  end if
end Add
```

* Delete:

```
Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true; otherwise false
  if head = ø
    return false
  end if
  if value = head.value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
      head.previous ← ø
    end if
    return true
  end if
  n ← head.next
  while n = ø and value !== n.value
    n ← n.next
  end while
  if n = tail
    tail ← tail.previous
    tail.next ← ø
    return true
  else if n = ø
    n.previous.next ← n.next
    n.next.previous ← n.previous
    return true
  end if
  return false
end Remove
```
