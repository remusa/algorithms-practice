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
                console.log(`FOUND ${value}: ${JSON.stringify(currentNode)}`)
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

        console.log(`NOT FOUND ${value}`)
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
    delete(value) {}

    // O(log(n))
    // traverse() {}
}

const bstTree = new BinarySearchTree()

bstTree.insert(9)
bstTree.insert(4)
bstTree.insert(6)
bstTree.insert(20)
bstTree.insert(170)
bstTree.insert(15)
bstTree.insert(1)

bstTree.search(999)
bstTree.search(170)

function traverse(node) {
    const parent = { value: node.value }
    parent.left = node.left === null ? null : traverse(node.left)
    parent.right = node.right === null ? null : traverse(node.right)
    console.log(`${parent.value}`)
    return parent
}

// JSON.stringify(traverse(bstTree.root))

//     9
//  4     20
// 1  6  15  170

export { BinarySearchTree }
