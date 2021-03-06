import { reverseString, reverseString2, reverseString3 } from './index'

it('should reverse string array', () => {
  const examples = [
    { input: ['h', 'e', 'l', 'l', 'o'], output: ['o', 'l', 'l', 'e', 'h'] },
    { input: ['H', 'a', 'n', 'n', 'a', 'h'], output: ['h', 'a', 'n', 'n', 'a', 'H'] },
    {
      input: [
        'A',
        ' ',
        'm',
        'a',
        'n',
        ',',
        ' ',
        'a',
        ' ',
        'p',
        'l',
        'a',
        'n',
        ',',
        ' ',
        'a',
        ' ',
        'c',
        'a',
        'n',
        'a',
        'l',
        ':',
        ' ',
        'P',
        'a',
        'n',
        'a',
        'm',
        'a',
      ],
      output: [
        'a',
        'm',
        'a',
        'n',
        'a',
        'P',
        ' ',
        ':',
        'l',
        'a',
        'n',
        'a',
        'c',
        ' ',
        'a',
        ' ',
        ',',
        'n',
        'a',
        'l',
        'p',
        ' ',
        'a',
        ' ',
        ',',
        'n',
        'a',
        'm',
        ' ',
        'A',
      ],
    },
  ]

  examples.forEach(({ input, output }) => {
    // expect(reverseString(input)).toEqual(output)
    expect(reverseString2(input)).toEqual(output)
    expect(reverseString3(input)).toEqual(output)
  })
})
