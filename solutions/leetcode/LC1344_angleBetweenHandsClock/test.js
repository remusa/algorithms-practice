import { angleClock } from './index'

describe('angleClock', () => {
  it('returns the correct angle', () => {
    const handsClock = [
      {
        hour: 12,
        minutes: 30,
        output: 165,
      },
      {
        hour: 3,
        minutes: 30,
        output: 75,
      },
      {
        hour: 3,
        minutes: 15,
        output: 7.5,
      },
      {
        hour: 4,
        minutes: 50,
        output: 155,
      },
      {
        hour: 12,
        minutes: 0,
        output: 0,
      },
      {
        hour: 13,
        minutes: 0,
        output: null,
      },
      {
        hour: -1,
        minutes: 0,
        output: null,
      },
      {
        hour: 0,
        minutes: 61,
        output: null,
      },
      {
        hour: 0,
        minutes: -1,
        output: null,
      },
    ]

    handsClock.forEach(({ hour, minutes, output }) => {
      expect(angleClock(hour, minutes)).toBe(output)
    })
  })
})
