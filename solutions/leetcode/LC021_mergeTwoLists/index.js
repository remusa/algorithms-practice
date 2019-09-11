/*
21. Merge Two Sorted Lists
Easy
https://leetcode.com/problems/merge-two-sorted-lists/

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

// Time complexity: O(n+m) -> size of both LLs
// Space complexity: O(1) -> always use 3 nodes, regardless of LLs size
function mergeTwoLists(l1, l2) {
    const dummyHead = { next: null }

    // Current node of the merged linked-list
    let tail = dummyHead

    // Run until one of the linked-lists is empty
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1
            tail = tail.next
            l1 = l1.next
        } else {
            tail.next = l2
            tail = tail.next
            l2 = l2.next
        }
    }

    // Point to the non-empty linked-list
    tail.next = l1 || l2

    return dummyHead.next
}

module.exports = mergeTwoLists
