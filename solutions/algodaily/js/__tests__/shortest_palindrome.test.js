import { shortestPalindrome } from '../shortest_palindrome'

it('should return the correct evaluated value', () => {
  expect(shortestPalindrome('ana')).toBe('ana')
  expect(shortestPalindrome('poppa')).toBe('appoppa')
  expect(shortestPalindrome('bubble')).toBe('elbbubble')
  expect(shortestPalindrome('dasndsadmx')).toBe('xmdasdnsadasndsadmx')
})
