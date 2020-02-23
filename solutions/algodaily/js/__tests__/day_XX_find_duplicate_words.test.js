import { findDuplicates } from "../day_XX_find_duplicate_words"

test('"The dog is the best" returns "the"', () => {
  expect(findDuplicates('The dog is the best')).toEqual(['the'])
})

test('"Happy thanksgiving, I am so full" returns []', () => {
  expect(findDuplicates('Happy thanksgiving, I am so full')).toEqual([])
})
