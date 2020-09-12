import { sumOfPrimes, getPrimes } from '../day_18_sum_all_primes'

describe('sum all primes tests', function () {
  // it('should return an array with the prime numbers from 1 up to N', () => {
  //     expect(getPrimes(2)).toEqual([2])
  //     expect(getPrimes(7)).toEqual([])
  //     expect(getPrimes(15)).toEqual([])
  //     expect(getPrimes(30)).toEqual([])
  //     expect(getPrimes(55)).toEqual([])
  // })

  it('should return whether sum of all prime numbers up to N', () => {
    expect(sumOfPrimes(2)).toEqual(2)
    // expect(sumOfPrimes(7)).toEqual(2)
    expect(sumOfPrimes(15)).toEqual(41)
    expect(sumOfPrimes(30)).toEqual(129)
    expect(sumOfPrimes(55)).toEqual(381)
  })
})
