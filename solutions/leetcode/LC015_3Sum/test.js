import { threeSum, threeSum2 } from './index'

it('returns the indices of the two numbers that add up to the target', () => {
  const examples = [
    { input: [], output: [] },
    { input: [0], output: [] },
    { input: [2, 0, 1, -1], output: [-1, 0, 1] },
    { input: [0, 0, 0, 0], output: [[0, 0, 0]] },
    {
      input: [-1, 0, 1, 2, -1, -4],
      output: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
  ]

  examples.forEach(({ input, output }) => {
    // expect(threeSum(input)).toEqual(output)
    expect(threeSum2(input)).toEqual(output)
  })
})

test.skip('threeSum([2, 0, 1, -1]) returns [[-1, 0, 1]]', () => {
  expect(threeSum([2, 0, 1, -1])[0].sort((a, b) => a - b)).toEqual([-1, 0, 1])
})

describe.skip('No duplicate results returned', () => {
  test('threeSum([0, 0, 0, 0]) returns [[0,0,0]]', () => {
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]])
  })

  test('threeSum([-1, 0, 1, 2, -1, -4]) returns [ [-1, 0, 1], [-1, -1, 2] ]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4]).length).toEqual(2)

    const intial = threeSum([-1, 0, 1, 2, -1, -4])
    const res = [...intial[0], ...intial[1]].sort((a, b) => a - b)
    expect(res).toEqual([-1, -1, -1, 0, 1, 2])
  })
})
