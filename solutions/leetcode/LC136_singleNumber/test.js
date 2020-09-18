import { singleNumber, singleNumber2 } from '.'

it('should return the element that appears once in the array', () => {
  const examples = [
    {
      input: [2, 2, 1],
      output: 1,
    },
    {
      input: [4, 1, 2, 1, 2],
      output: 4,
    },
    {
      input: [4, 4, 1, 2, 1, 2],
      output: 0,
    },
  ]

  examples.forEach(({ input, output }) => {
    expect(singleNumber(input)).toEqual(output)
    expect(singleNumber2(input)).toEqual(output)
  })
})
