/*
19. Remove Nth Node From End of List
Medium
https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

// Time complexity: O(n) -> traverse the linked-list once
// Space complexity: O(1) -> always use two nodes (size of LL doesn't matter)
function removeNthFromEnd(head, n) {
  // Exception cases
  const dummyHead = { next: head }

  let slow = dummyHead
  let fast = dummyHead

  // Move fast n nodes ahead of slow
  for (let i = 1; i <= n; i++) {
    fast = fast.next
  }

  // Move slow and fast up one node at a time until fast is last node
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  // Remove nth node from the end by making slow point to fast
  slow.next = slow.next.next

  // Return the head of the linked-list with that node removed
  return dummyHead.next
}

module.exports = removeNthFromEnd
