const { removeNthFromEnd, removeNthFromEnd2 } = require('.')

class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const convertLLToArr = ll => {
  const arr = []
  while (ll) {
    arr.push(ll.val)
    ll = ll.next
  }
  return arr
}

const convertIntToLL = int => {
  let list = null
  int.split('').forEach(digit => {
    const head = new ListNode(Number(digit), list)
    list = head
  })
  return list
}

const convertArrToLL = arr => {
  let list = null
  arr.forEach(item => {
    const head = new ListNode(Number(item), list)
    list = head
  })
  return list
}

test('removeNthFromEnd([5,4,3,2,1], 2) becomes [5,4,3,1]', () => {
  const startingLL = convertIntToLL('12345')
  expect(convertLLToArr(removeNthFromEnd(startingLL, 2))).toEqual([5, 4, 3, 1])
})

test('removeNthFromEnd([1], 1) becomes []', () => {
  expect(removeNthFromEnd({ val: 'meow', next: null }, 1)).toEqual(null)
})

it('should remove the Nth node from the end of the linked list', () => {
  const examples = [
    {
      input: { ll: [1, 2, 3, 4, 5], n: 2 },
      output: [1, 2, 3, 5],
    },
  ]

  examples.forEach(({ input, output }) => {
    const linkedList = convertArrToLL(input.ll)
    expect(removeNthFromEnd(linkedList, input.n)).toEqual(output)
    expect(removeNthFromEnd2(linkedList, input.n)).toEqual(output)
  })
})
