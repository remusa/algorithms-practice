/*
	1344. Angle Between Hands of a Clock
	https://leetcode.com/problems/angle-between-hands-of-a-clock/
	https://medium.com/@poitevinpm/leetcode-1344-angle-between-hands-of-a-clock-ea2006091429

	Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

	Example 1:
		Input: hour = 12, minutes = 30
		Output: 165

	Example 2:
		Input: hour = 3, minutes = 30
		Output: 75

	Example 3:
		Input: hour = 3, minutes = 15
		Output: 7.5

	Example 4:
		Input: hour = 4, minutes = 50
		Output: 155

	Example 5:
		Input: hour = 12, minutes = 0
		Output: 0

	Constraints:
    1 <= hour <= 12
    0 <= minutes <= 59
    Answers within 10^-5 of the actual value will be accepted as correct.
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
export function angleClock(hour, minutes) {
  if (hour < 1 || hour > 12 || minutes < 0 || minutes > 59) {
    return null
  }

  const alpha = (hour * 60 + minutes) * (360 / (12 * 60)) // (minutes spent) * (360.0 / (total minutes for full circle))
  const beta = (minutes * 360) / 60 // (minutes * 360.0) / (total minutes for full circle)

  const angle = Math.abs(beta - alpha)

  const result = Math.min(angle, 360 - angle)

  return result
}
