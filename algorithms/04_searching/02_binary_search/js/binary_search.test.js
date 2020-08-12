const bs = require('./binary_search')

describe('linear search tests', function () {
  it('should return the correct index when the value is found', () => {
    expect(bs.binarySearch([2, 3, 5, 7], 2)).toEqual(0)
    expect(bs.binarySearch([2, 3, 5, 7], 7)).toEqual(3)
    expect(bs.binarySearch([2, 3, 5, 5], 5)).toEqual(2)
    expect(bs.binarySearch([2, 3, 5, 7], 9)).toEqual(-1)
  })

  it('should return null for empty lists', () => {
    expect(bs.binarySearch([], '')).toEqual(-1)
  })

  it('should return the correct index when the value is found', () => {
    const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']
    expect(bs.binarySearch(beasts, 'Godzilla')).toEqual(1)
    expect(bs.binarySearch(beasts, 'Mosura')).toEqual(2)
    expect(bs.binarySearch(beasts, 'Nessie')).toEqual(5)
  })

  it("should return -1 if the value isn't found", () => {
    const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']
    expect(bs.binarySearch(beasts, 'Dragon')).toEqual(-1)
  })
})
