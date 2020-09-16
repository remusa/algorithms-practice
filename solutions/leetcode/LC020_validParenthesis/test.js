import { isValid, isValid2 } from './index'

it('should return true if parenthesis are valid', () => {
  const examples = [
    { input: '()', output: true },
    { input: '()[]{}', output: true },
    { input: '(]', output: false },
    { input: '([)]', output: false },
    { input: '{[]}', output: true },
  ]

  examples.forEach(({ input, output }) => {
    expect(isValid(input)).toEqual(output)
    expect(isValid2(input)).toEqual(output)
  })
})
