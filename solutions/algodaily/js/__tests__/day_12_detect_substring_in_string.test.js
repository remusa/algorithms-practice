import { detectSubstring, detectSubstringImproved } from '../day_12_detect_substring_in_string'

describe('detect substring in string tests', () => {
  it('should return the index where the substring starts, otherwise return -1', () => {
    expect(detectSubstring('ggraph', 'graph')).toEqual(1)
    expect(detectSubstring('geography', 'graph')).toEqual(3)
    expect(detectSubstring('digginn', 'inn')).toEqual(4)
    expect(detectSubstring('thepigflewwow', 'flew')).toEqual(6)
    expect(detectSubstring('twocanplay', 'two')).toEqual(0)
    expect(detectSubstring('wherearemyshorts', 'pork')).toEqual(-1)
  })

  it('should return the index where the substring starts, otherwise return -1', () => {
    expect(detectSubstringImproved('ggraph', 'graph')).toEqual(1)
    expect(detectSubstringImproved('geography', 'graph')).toEqual(3)
    expect(detectSubstringImproved('digginn', 'inn')).toEqual(4)
    expect(detectSubstringImproved('thepigflewwow', 'flew')).toEqual(6)
    expect(detectSubstringImproved('twocanplay', 'two')).toEqual(0)
    expect(detectSubstringImproved('wherearemyshorts', 'pork')).toEqual(-1)
  })
})
