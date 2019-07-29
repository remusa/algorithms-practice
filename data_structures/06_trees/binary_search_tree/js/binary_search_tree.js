import { Queue } from '../../../04_queues/js/queue_implementation'
import { Stack } from '../../../03_stacks/js/stack_linked_list_implementation'

class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // O(log(n))
    search(value) {
        if (!this.root) {
            return null
        }

        let currentNode = this.root

        // Traverse the tree
        while (currentNode) {
            // Check if we found the node
            if (currentNode.value === value) {
                return currentNode
            }
            // Go to the left
            if (value < currentNode.value) {
                currentNode = currentNode.left
            }
            // Go to the right
            else {
                currentNode = currentNode.right
            }
        }

        return null
    }

    // O(log(n))
    insert(value) {
        // 1. Create the node
        const newNode = new BinaryTreeNode(value)

        // 2. If tree is empty, new node is the root
        if (!this.root) {
            this.root = newNode
        }
        // 3. Otherwise, traverse the tree and find where it belongs
        else {
            // this.insertNode(this.root, newNode)

            let currentNode = this.root

            while (currentNode) {
                // Go to the left
                if (value < currentNode.value) {
                    // Insert left
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    // Else go to the left
                    currentNode = currentNode.left
                }
                // Go to the right
                else {
                    // Insert right
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    // Else go to the right
                    currentNode = currentNode.right
                }
            }
        }

        return this
    }

    insertNode(parent, node) {
        // 1. If node is smaller than the parent, traverse to the left
        if (node.value < parent.value) {
            // 2. If there's no left child, insert it there
            if (!parent.left) {
                parent.left = node
            }
            // 3. Otherwise, go to the next level and try again
            else {
                this.insertNode(parent.left, node)
            }
        }
        // 4. If node is greater than or equal to the parent's, traverse to the
        //    right
        else {
            // 5. If there's no right child, insert it there
            if (!parent.right) {
                parent.right = node
            }
            // 6. Otherwise, go to the next level and try again
            else {
                this.insertNode(parent.right, node)
            }
        }
    }

    // O(log(n))
    delete(value) {
        if (!this.root) {
            return null
        }

        let parentNode = null
        let currentNode = this.root

        // Traverse the tree
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else if (currentNode.value > value) {
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                const deletedNode = currentNode

                // Option 1: No right child
                if (!currentNode.right) {
                    if (!parentNode) {
                        this.root = currentNode.left
                    } else {
                        // If parent > current value, make current left child a
                        // child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        }
                        // if parent < current value, make left child a right of
                        // parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                }

                // Option 2: Right child which doesn't have a left child
                else if (!currentNode.right.left) {
                    currentNode.right.left = currentNode.left

                    if (!parentNode) {
                        this.root = currentNode.right
                    } else {
                        // if parent > current, make right child of the left the
                        // parent
                        if (currentNode.value < parentNode) {
                            parentNode.left = currentNode.right
                        }

                        // if parent < current, make right child a right child
                        // the parent
                        else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right
                        }
                    }
                }

                // Option 3: Right child that has a left child
                else {
                    // Find the right's child's left most child
                    let leftMostParent = currentNode.right
                    let leftMost = leftMostParent.left

                    while (leftMost.left) {
                        leftMostParent = leftMost
                        leftMost = leftMost.left
                    }

                    // Parent's left subtree is now leftMost's right subtree
                    leftMostParent.left = leftMost.right
                    leftMost.left = currentNode.left
                    leftMost.right = currentNode.right

                    if (!parentNode) {
                        this.root = leftMost
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftMost
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftMost
                        }
                    }
                }

                return deletedNode
            }
        }

        return null
    }

    breadthFirstSearch() {
        const queue = new Queue()
        const currentNode = this.root
    }

    depthFirstSearch() {
        const stack = new Stack()
    }

    // inorder = left -> root -> right
    inOrderTraversal() {
        const inorder = []
        function traversal(node) {
            // Left
            if (node.left) {
                traversal(node.left)
            }
            // Root
            inorder.push(node.value)
            // Right
            if (node.right) {
                traversal(node.right)
            }
        }
        traversal(this.root)
        return inorder
    }

    // preorder = root -> left -> right
    preOrderTraversal() {
        const preorder = []
        function traversal(node) {
            // Root
            preorder.push(node.value)
            // Left
            if (node.left) {
                traversal(node.left)
            }
            // Right
            if (node.right) {
                traversal(node.right)
            }
        }
        traversal(this.root)
        return preorder
    }

    // postorder = right -> left -> root
    postOrderTraversal() {
        const postorder = []
        function traversal(node) {
            // Left
            if (node.left) {
                traversal(node.left)
            }
            // Right
            if (node.right) {
                traversal(node.right)
            }
            // Root
            postorder.push(node.value)
        }
        traversal(this.root)
        return postorder
    }
}

// const bstTree = new BinarySearchTree()

// bstTree.insert(9)
// bstTree.insert(4)
// bstTree.insert(6)
// bstTree.insert(20)
// bstTree.insert(170)
// bstTree.insert(15)
// bstTree.insert(1)

// bstTree.search(999)
// bstTree.search(170)

// function traverse(node) {
//     const parent = { value: node.value }
//     parent.left = node.left === null ? null : traverse(node.left)
//     parent.right = node.right === null ? null : traverse(node.right)
//     console.log(`${parent.value}`)
//     return parent
// }

// console.log(`${bstTree.inOrderTraversal()}`)
// console.log(`${bstTree.preOrderTraversal()}`)
// console.log(`${bstTree.postOrderTraversal()}`)

// console.log(`DELETING: ${JSON.stringify(bstTree.delete(1))}`)

// console.log(`${bstTree.inOrderTraversal()}`)

//     9
//  4     20
// 1  6  15  170

export { BinarySearchTree }
// module.exports = {
//     BinarySearchTree,
// }
