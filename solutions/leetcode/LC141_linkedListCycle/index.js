/*
141. Linked List Cycle
https://leetcode.com/problems/linked-list-cycle/

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?
*/

// Using turtle and hare strategy or Floyd's Algorithm
// Time complexity: O(n) -> O(n + k) slow traverses the LL 1 time, fast multiple times if there's a cycle
// Space complexity: O(1) -> using 2 pointers
function hasCycle(head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    // Advance fast by 1 node
    slow = slow.next

    // Advance fast by 2 nodes (best case is O(n/2) -> O(n))
    fast = fast.next.next

    // If the fast pointer caught up with slow one it's a cycle
    if (slow === fast) return true
  }
  return false
}

// Time complexity: O(n) -> size of LL
// Space complexity: O(n) -> using a set of n keys
function hasCycle2(head) {
  let curr = head
  const set = new Set()

  while (curr) {
    // If node exists in set there's a cycle
    if (set.has(curr)) return true

    // Add current node to set
    set.add(curr)

    // Move to the next node
    curr = curr.next
  }

  return false
}

export { hasCycle, hasCycle2 }
