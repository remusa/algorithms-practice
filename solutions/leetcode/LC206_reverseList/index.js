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

module.exports = reverseList
