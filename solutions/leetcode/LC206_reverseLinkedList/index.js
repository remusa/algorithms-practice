/*
206. Reverse Linked List
Easy
https://leetcode.com/problems/reverse-linked-list/

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

// Time complexity: O(n) -> traverse LL once
// Space complexity: O(1) -> always use 2 pointers (prev and curr) regardless of size
function reverseList(head) {
  let previous = null
  let current = head

  while (current) {
    const temp = current.next

    // Change direction
    current.next = previous

    // Move previous and current up by 1 node
    previous = current
    current = temp
  }

  // Previous is now the new head of the linked-list
  return previous
}

// Time complexity: O(n) -> traverse LL once
// Space complexity: O(1) -> always uses 3 pointers (prev, curr and temp)
function reverseListIterative(head) {
  // Set pointers and save a reference to the previous node
  let prev = null
  let curr = head

  // Traverse the linked list
  while (curr) {
    // Save next node
    const temp = curr.next

    // Switch directions by changing .next to the previous node
    curr.next = prev

    // Move pointers forward
    prev = curr
    curr = temp
  }

  // Prev is the new head
  return prev
}

// Time complexity: O(n) -> traverse LL once
// Space complexity: O(1) -> n if each recursive call is counted
function reverseListRecursive(curr, prev = null) {
  // Base case: return the new head after traversing the LL
  if (!curr) return prev

  // Save next node
  const temp = curr.next

  // Switch directions by changing .next to the previous node
  curr.next = prev

  // Move pointers forward: reference to pointers are passed down as arguments
  return reverseListRecursive(temp, curr)
}

export { reverseList, reverseListIterative, reverseListRecursive }
