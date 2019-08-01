class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // O(1) -> adds to the end
    append(value) {
        // 1. Create the new node
        const newNode = new Node(value)

        // 2. Check if list is empty (no head)
        if (!this.head) {
            // 3. Update the current head and tail to the new node
            this.head = newNode
            this.tail = newNode
        } else {
            // 4. Point the tail to the new node
            this.tail.next = newNode

            // 5. Update the tail to the new node
            this.tail = newNode
        }

        this.length++
        return this
    }

    // O(1) -> removes from the end
    pop() {
        if (!this.head) {
            return null
        }

        let currentNode = this.head
        let newTail = currentNode

        while (currentNode.next) {
            newTail = current
            currentNode = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return currentNode
    }

    // O(1) -> adds to the front (unshift)
    prepend(value) {
        // 1. Create the new node
        const newNode = new Node(value)

        // 2. Check if list is empty (no head)
        if (!this.head) {
            // 3. Update the current head and tail to the new node
            this.head = newNode
            this.tail = newNode
            return this
        }

        // 4. Point the new node to the head
        newNode.next = this.head

        // 5. Update the head to the new node
        this.head = newNode

        this.length++
        return this
    }

    // O(1) -> removes from the front (shift)
    shift() {
        if (!this.head) {
            return null
        }

        const currentHead = this.head
        this.head = currentHead.next

        if (this.length === 0) {
            this.tail = null
        }

        this.length--
        return currentHead
    }

    // O(n)
    lookup(value) {
        // 1. Check if list is empty
        if (!this.head) {
            return null
        }

        // 2. Traverse the list starting from the head and compare each node
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }

        return null
    }

    // O(n)
    insert(index, value) {
        // 1. If index isn't valid add it to the end
        if (index >= this.length) {
            return this.append(value)
        }

        // 2. Create the new node
        const newNode = new Node(value)

        // 3. Traverse the list and find the previous and following nodes of the specified index
        const prev = this.get(index - 1)
        const temp = prev.next // same as getting this.get(index)

        // 4. Update the prev node to point to the new node
        prev.next = newNode

        // 5. Point the new node to the temp
        newNode.next = temp

        this.length++
        return this
    }

    // O(n)
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }

        let counter = 0
        let currentNode = this.head

        while (counter < index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    // O(n)
    set(index, value) {
        const foundNode = this.get(index)

        if (!foundNode) {
            return null
        }

        foundNode.value = value
        return foundNode
    }

    // O(n)
    delete(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }

        if (index === 0) {
            return this.pop()
        }

        // 1. Check if list is empty
        if (!this.head) {
            return null
        }

        // 3. Traverse the list and find the previous and following nodes of the specified index
        const prev = this.get(index - 1)
        const deleted = prev.next

        // 4. Update the pointer of the prev
        prev.next = deleted.next

        // 5. Delete the node
        // delete nodeToDelete

        this.length--
        return deleted
    }

    printList() {
        const nodes = []
        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        return nodes
    }

    getValues() {
        const arr = []

        this.printList()
            .map(node => {
                arr.push(node.value)
            })
            .toString()

        return arr
    }

    reverse() {
        // 0. Check if there's only 1 element in the list
        if (!this.head.next) {
            return this.head
        }

        // 1. Get the first 2 nodes
        let first = this.head
        let second = first.next

        // 2. Point the tail to the head (inverting it)
        this.tail = this.head

        // 3. Traverse the linked list
        while (second) {
            // 4. Save the next node
            const temp = second.next

            // 5. Point the next node of the current node to the previous node
            second.next = first

            // 6. Switch the first node to be the second
            first = second

            // 7. Switch the second node to be the saved one (third)
            second = temp
        }

        // 8. Point the head to null (because it would be the tail's next)
        this.head.next = null

        // 9. Point the head to be the first element
        this.head = first

        return this
    }

    reverse2() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        for (let i = 0; i < this.length; i++) {
            const { next } = node
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

module.exports = {
    SinglyLinkedList,
}
