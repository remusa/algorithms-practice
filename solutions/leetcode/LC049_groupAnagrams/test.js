import { groupAnagrams, groupAnagrams2 } from './index'

test("['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] returns 3 groups of Anagrams", () => {
  const res = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']).sort(
    (a, b) => b.length - a.length,
  )

  res.forEach(subArr => subArr.sort())

  expect(res.length).toEqual(3)

  const subArr1 = res[0]
  expect(subArr1).toEqual(['ate', 'eat', 'tea'])
  const subArr2 = res[1]
  expect(subArr2).toEqual(['nat', 'tan'])
  const subArr3 = res[2]
  expect(subArr3).toEqual(['bat'])
})

it('returns the strings grouped by anagram of an array of strings', () => {
  const examples = [
    {
      input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      output: [['bat'], ['nat', 'tan']],
    },
    {
      input: [''],
      output: [['']],
    },
    {
      input: ['a'],
      output: [['a']],
    },
  ]

  examples.forEach(({ input, output }) => {
    expect(groupAnagrams(input)).toEqual(output)
    expect(groupAnagrams2(input)).toEqual(output)
  })
})
