import { fizzBuzz } from '../day_02_fizz_buzz'

describe('fizz buzz tests', function() {
    it('should return the correct values', () => {
        expect(fizzBuzz(0)).toEqual('')
        expect(fizzBuzz(1)).toEqual('1')
        expect(fizzBuzz(15)).toEqual('12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz')
    })
})
