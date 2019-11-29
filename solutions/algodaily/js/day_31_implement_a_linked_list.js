/*
    Traditionally we have the following LinkedListNode class definition:

    class LinkedListNode {
        constructor(val, next = null) {
            this.val = val;
            this.next = next;
        }
    }
    ​
    We can readily create a entire linked list by writing statements like:

    const list1 = new LinkedListNode(2);
    list1.next =  new LinkedListNode(3);
    ​
    This will append the node to the end of our new list, and does the job most of the time. However, what if we wanted to make things cleaner and implement a class to help us append and prepend nodes?

    Given the following skeleton for a Linked List class, can you fill in the #append and #prepend methods? We will call .head on an instance of your class to get the head node.

    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }

        prepend(value) {}

        append(value) {}
    };
*/

class LinkedListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const newNode = new LinkedListNode(value)
    const oldHead = this.head

    this.head = newNode
    newNode.next = oldHead

    if (!this.tail) {
      this.tail = newNode
    }
  }

  append(value) {
    const newNode = new LinkedListNode(value)
    const oldTail = this.tail

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    oldTail.next = newNode
    this.tail = newNode
  }

  toString() {
    // helper method
    const toPrint = []
    let currNode = this.head

    while (currNode) {
      toPrint.push(currNode.val)
      currNode = currNode.next
    }

    return toPrint.join(' -> ')
  }
}

module.exports = {
  LinkedList,
  LinkedListNode,
}
