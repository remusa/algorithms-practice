/*
    https://algodaily.com/challenges/validate-a-bst

    Given a binary search tree like the one below, can you write a function that will return true if it is valid?  ​

    Recall that a BST is valid only given the following conditions:
        The left child subtree of a node contains only nodes with values less than the parent node's.
        The right child subtree of a node contains only nodes with values greater than the parent node's.
        Both the left and right subtrees must also be BSTs.
​*/

class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

// inorder: left -> root -> right
function inOrder(node, output) {
    function traverse(node) {
        // Left
        if (node.left) {
            traverse(node.left)
        }
        // Root
        output.push(node.value)
        // Right
        if (node.right) {
            traverse(node.right)
        }
    }

    traverse(node)

    return output
}

function isValidBST(node) {
    if (!node) {
        return true
    }

    const output = inOrder(node, [])

    while (output.length) {
        const poppedNode = output.pop()
        const lastNode = output[output.length - 1]

        if (poppedNode < lastNode) {
            return false
        }
    }

    return true
}

const tree = new Node(5)
tree.left = new Node(3)
tree.right = new Node(9)

console.log(isValidBST(tree))

module.exports = {
    Node,
    isValidBST,
}
