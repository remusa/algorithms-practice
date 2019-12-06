/*
You're sent a linked list of numbers, but it's been received in the opposite order to what you need. This has happened multiple times now, so you decide to write an algorithm to reverse the lists as they come in. The list you've received is as follows:

  17 -> 2 -> 21 -> 6 -> 42 -> 10

Write an algorithm for a method reverseList that takes in a head node as a parameter, and reverses the linked list. It should be capable of reversing a list of any length. You may use the example linked list for testing purposes. Your method will be called as such:

class LinkedListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

l1 = new LinkedListNode(1);
l1.next = new LinkedListNode(2);
reverseList(l1);
*/

class LinkedListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

// iterative
function reverseListIterative(head) {
  // Start at the head
  let head = head
  let newHead = null

  while (head !== null) {
    // store the node to the right to reuse later
    let nextNode = head.next
    // set the current node's next to point backwards
    head.next = newHead
    // store the current node, to be used as the new next later
    newHead = head
    // the previously right-side node is now processed
    head = nextNode
  }

  return head
}

// recursive
function reverseListRecursive(head) {
  if (!head || !head.next) {
    return head
  }

  let rest = reverseListRecursive(head.next)

  head.next.next = head
  delete head.next

  return rest
}

export { LinkedListNode, reverseListIterative, reverseListRecursive }
