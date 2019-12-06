import { reverseListIterative, reverseListRecursive } from '../day_60_reverse_linked_list'

it('iterative reverse linked list', () => {
  const l1 = new LinkedListNode(1)
  l1.next = new LinkedListNode(2)
  console.log(reverseListIterative(l1))

  const l2 = new LinkedListNode(21)
  l2.next = new LinkedListNode(2)
  l2.next.next = new LinkedListNode(7)
  console.log(reverseListIterative(l2))
})

it('iterative reverse linked list', () => {
  const l1 = new LinkedListNode(1)
  l1.next = new LinkedListNode(2)

  const l2 = new LinkedListNode(21)
  l2.next = new LinkedListNode(2)
  l2.next.next = new LinkedListNode(7)
})
