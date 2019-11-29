import { Queue } from '../../../04_queues/js/queue_implementation'
import { Stack } from '../../../03_stacks/js/stack_linked_list_implementation'

// const Queue = require('../../../04_queues/js/queue_implementation')
// const Stack = require('../../../03_stacks/js/stack_linked_list_implementation')

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
    let found = false

    // Traverse the tree
    while (currentNode && !found) {
      // Go to the left
      if (value < currentNode.value) {
        currentNode = currentNode.left
      }
      // Go to the right
      else if (value > currentNode.value) {
        currentNode = currentNode.right
      }
      // We found the node
      else {
        found = true
      }
    }

    if (!found) {
      return null
    }
    return currentNode
  }

  // O(log(n))
  contains(value) {
    if (!this.root) {
      return false
    }

    let current = this.root

    while (current) {
      if (value === current.value) {
        return true
      }
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      }
    }

    return false
  }

  // O(log(n))
  insert(value) {
    // 1. Create the node
    const newNode = new BinaryTreeNode(value)

    // 2. If tree is empty, new node is the root
    if (!this.root) {
      this.root = newNode
      return this
    }
    // 3. Otherwise, traverse the tree and find where it belongs
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

  // Iterative approach - O(h)
  breadthFirstSearch(value) {
    // Put the starting node on a queue and mark it as visited
    const myQueue = new Queue.Queue()
    myQueue.enqueue(this.root)

    // While the queue isn't empty
    while (!myQueue.isEmpty()) {
      // Dequeue first node of the queue
      const currentNode = myQueue.dequeue()
      console.log(`${JSON.stringify(currentNode)}`)

      // If it is the node we are searching for exit and return the node
      if (currentNode.value === value) {
        return currentNode
      }

      // Put unvisited children in the queue

      // Traverse left branch
      if (currentNode.left) {
        myQueue.enqueue(currentNode.left)
      }

      // Traverse right branch
      if (currentNode.right) {
        myQueue.enqueue(currentNode.right)
      }
    }

    return null
  }

  depthFirstSearch(value) {
    // Put the starting node on a stack and mark it as visited
    const myStack = new Stack.Stack()
    myStack.push(this.root)

    // While the stack isn't empty
    while (!myStack.isEmpty()) {
      // Pop top node of the stack
      const currentNode = myStack.pop()

      // If it is the node we are searching for exit and return the node
      if (currentNode.value === value) {
        return currentNode
      }

      // Traverse left branch
      if (currentNode.left) {
        myStack.push(currentNode.left)
      }

      // Traverse right branch
      if (currentNode.right) {
        myStack.push(currentNode.right)
      }
    }

    return null
  }

  bfsIterative() {
    const data = []
    // Put the starting node on a queue and marked it as visited
    const queue = []
    queue.push(this.root)

    // While the queue isn't empty
    while (queue.length > 0) {
      // Dequeue first node of the queue
      const currentNode = queue.shift()
      data.push(currentNode.value)

      // Put unvisited children in the queue
      // Traverse left branch
      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      // Traverse right branch
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return data
  }

  bfsRecursive() {
    const queue = []
    const list = []

    function traverse(queueR, listR) {
      if (!queueR.length) {
        return listR
      }

      // Dequeue first node of the queue
      const currentNode = queueR.shift()
      listR.push(currentNode.value)

      // Put unvisited children in the queue
      // Traverse left branch
      if (currentNode.left) {
        queueR.push(currentNode.left)
      }

      // Traverse right branch
      if (currentNode.right) {
        queueR.push(currentNode.right)
      }

      traverse(queueR, listR)
    }

    traverse(queue, list)
    return list
  }

  bfsRecursive2(queueR, list) {
    if (!queueR.length) {
      return list
    }

    // Dequeue first node of the queue
    const currentNode = queueR.shift()
    list.push(currentNode.value)

    // Put unvisited children in the queue
    // Traverse left branch
    if (currentNode.left) {
      queueR.push(currentNode.left)
    }

    // Traverse right branch
    if (currentNode.right) {
      queueR.push(currentNode.right)
    }

    return this.bfsRecursive2(queueR, list)
  }

  // inorder = left -> root -> right
  dfsInOrder() {
    this.inOrder(this.root, [])
  }

  inOrder(node, list) {
    // Left
    if (node.left) {
      this.inOrder(node.left, list)
    }
    // Root
    list.push(node.value)
    // Right
    if (node.right) {
      this.inOrder(node.right, list)
    }

    return list
  }

  // preorder = root -> left -> right
  dfsPreOrder() {
    return this.preOrder(this.root, [])
  }

  preOrder(node, list) {
    // Root
    list.push(node.value)
    // Left
    if (node.left) {
      this.preOrder(node.left, list)
    }
    // Right
    if (node.right) {
      this.preOrder(node.right, list)
    }

    return list
  }

  // postorder = right -> left -> root
  dfsPostOrder() {
    return this.postOrder(this.root, [])
  }

  postOrder(node, list) {
    // Left
    if (node.left) {
      this.postOrder(node.left, list)
    }
    // Right
    if (node.right) {
      this.postOrder(node.right, list)
    }
    // Root
    list.push(node.value)

    return list
  }
}

//     9
//  4     20
// 1  6  15  170

const bstTree = new BinarySearchTree()

bstTree.insert(9)
bstTree.insert(4)
bstTree.insert(6)
bstTree.insert(20)
bstTree.insert(170)
bstTree.insert(15)
bstTree.insert(1)

console.log(`BFS: ${bstTree.breadthFirstSearch(1)}`)
// console.log(`BFS: ${bstTree.breadthFirstSearch(99)}`)

// console.log(`DFS: ${bstTree.depthFirstSearch(1)}`)

// console.log(`${bstTree.inOrderTraversal(bstTree.root, [])}`)
// console.log(`${bstTree.preOrderTraversal(bstTree.root, [])}`)
// console.log(`${bstTree.postOrderTraversal(bstTree.root, [])}`)

// bstTree.search(999)
// bstTree.search(170)

// console.log(`DELETING: ${JSON.stringify(bstTree.delete(1))}`)
// console.log(`${bstTree.inOrderTraversal()}`)

// function traverse(node) {
//     const parent = { value: node.value }
//     parent.left = node.left === null ? null : traverse(node.left)
//     parent.right = node.right === null ? null : traverse(node.right)
//     console.log(`${parent.value}`)
//     return parent
// }

module.exports = {
  BinarySearchTree,
}
