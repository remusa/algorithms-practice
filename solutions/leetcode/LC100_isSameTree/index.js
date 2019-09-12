/*
100. Same Tree
Easy
https://leetcode.com/problems/same-tree/

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

// Time complexity: O(p+q) -> where p and q are number of nodes of input tree
// Space complexity: O(1) -> unless recursive calls count as n
function isSameTree(p, q) {
    let sameTree = true

    function checkSameNode(p, q) {
        // Both nodes are null
        if (!p && !q) return

        // If only one node is valid then they aren't the same
        if (!p || !q) {
            sameTree = false
            return
        }

        // Check values
        if (p.val !== q.val) {
            sameTree = false
            return
        }

        // Recursively check children
        checkSameNode(p.left, q.left)
        checkSameNode(p.right, q.right)
    }

    checkSameNode(p, q)

    return sameTree
}

module.exports = isSameTree
