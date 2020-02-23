import { getTV } from "../day_XX_targets_and_vicinities"

test('getTV tests', () => {
  expect(getTV('345', '135')).toBe('1T1V')
  expect(getTV('01', '01')).toBe('2T0V')
  expect(getTV('130', '893')).toBe('0T1V')
})
