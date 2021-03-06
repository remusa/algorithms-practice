import { SinglyLinkedList } from './singly_linked_list'

describe('Singly Linked List tests', () => {
  it('should perform the operations on a singly-linked list', () => {
    const myLinkedList = new SinglyLinkedList()

    myLinkedList.append(10)
    expect(myLinkedList.getValues()).toEqual([10])
    myLinkedList.append(5)
    expect(myLinkedList.getValues()).toEqual([10, 5])
    myLinkedList.append(16)
    expect(myLinkedList.getValues()).toEqual([10, 5, 16])
    myLinkedList.prepend(1)
    expect(myLinkedList.getValues()).toEqual([1, 10, 5, 16])
    myLinkedList.lookup(16)
    expect(myLinkedList.lookup(16)).toEqual({ value: 16, next: null })
    myLinkedList.insert(2, 99)
    expect(myLinkedList.getValues()).toEqual([1, 10, 99, 5, 16])
    myLinkedList.insert(20, 88)
    expect(myLinkedList.getValues()).toEqual([1, 10, 99, 5, 16, 88])

    expect(myLinkedList.delete(4)).toEqual({
      value: 16,
      next: { value: 88, next: null },
    })
    expect(myLinkedList.getValues()).toEqual([1, 10, 99, 5, 88])

    expect(myLinkedList.reverse().getValues()).toEqual([88, 5, 99, 10, 1])
  })
})
