const ls = require('./linear_search')

describe('linear search tests', function() {
  it('should return null for empty lists', () => {
    expect(ls.linearSearch([], '')).toEqual(-1)
  })

  it('should return the correct index where the value is found', () => {
    const beasts = [
      'Centaur',
      'Godzilla',
      'Mosura',
      'Minotaur',
      'Hydra',
      'Nessie',
    ]
    expect(ls.linearSearch(beasts, 'Godzilla')).toEqual(1)
    expect(ls.linearSearch(beasts, 'Minotaur')).toEqual(3)
    expect(ls.linearSearch(beasts, 'Nessie')).toEqual(5)
  })

  it("should return -1 if the value isn't found", () => {
    const beasts = [
      'Centaur',
      'Godzilla',
      'Mosura',
      'Minotaur',
      'Hydra',
      'Nessie',
    ]
    expect(ls.linearSearch(beasts, 'Dragon')).toEqual(-1)
  })
})
