/*
    https://algodaily.com/challenges/validate-a-bst

    Given a binary search tree like the one below, can you write a function that will return true if it is valid?

    Recall that a BST is valid only given the following conditions:
        The left child subtree of a node contains only nodes with values less than the parent node's.
        The right child subtree of a node contains only nodes with values greater than the parent node's.
        Both the left and right subtrees must also be BSTs.
​ */

class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

// inorder: left -> root -> right
function inOrder(node) {
    const output = []

    function traverse(currNode) {
        // Left
        if (currNode.left) {
            traverse(currNode.left)
        }
        // Root
        output.push(currNode.value)
        // Right
        if (currNode.right) {
            traverse(currNode.right)
        }
    }

    traverse(node)

    return output
}

// Time complexity: O(n) -> traverse every node in the tree
// Space complexity: O(1) -> O(n) if recursive calls count
function isValidBST(node) {
    if (!node) {
        return true
    }

    const stack = inOrder(node)

    while (stack.length) {
        const poppedNode = stack.pop()
        const lastNode = stack[stack.length - 1]

        if (poppedNode < lastNode) {
            return false
        }
    }

    return true
}

function isValidBST2(rootNode) {
    let valid = true

    function helper(node, min, max) {
        if (!node) return

        // If node isn't valid return
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            valid = false
            return
        }

        // Node is valid
        helper(node.left, min, node.val)
        helper(node.right, node.val, max)
    }

    helper(rootNode, null, null)

    return valid
}

const tree = new Node(5)
tree.left = new Node(3)
tree.right = new Node(9)

console.log(isValidBST(tree))

module.exports = {
    Node,
    isValidBST,
    isValidBST2,
}
