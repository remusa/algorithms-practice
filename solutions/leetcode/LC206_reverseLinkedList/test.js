import { reverseList, reverseListIterative, reverseListRecursive } from './index'

test('reverses the list', () => {
  const head = { val: 'A', next: null }
  const bNode = { val: 'B', next: null }
  head.next = bNode

  expect(reverseList(head)).toEqual(bNode)
  expect(bNode.next).toEqual(head)
  expect(head.next).toEqual(null)
})

it('should reverse the linked list', () => {
  const examples = [
    {
      input: { ll: '1->2->3->4->5->NULL' },
      output: '5->4->3->2->1->NULL',
    },
  ]

  examples.forEach(({ input, output }) => {
    expect(reverseList(input)).toEqual(output)
    expect(reverseListIterative(input)).toEqual(output)
    expect(reverseListRecursive(input)).toEqual(output)
  })
})
