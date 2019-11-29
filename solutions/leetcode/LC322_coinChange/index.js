/*
322. Coin Change
Medium
https://leetcode.com/problems/coin-change/

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Note:
You may assume that you have an infinite number of each kind of coin.
*/

// Time complexity: O(a*c) -> where a is the amount, and c is the number of coins
// Space complexity: O(a) -> auxiliary array of length a
function coinChange(coins, amount) {
  const minCoins = new Array(amount + 1).fill(Infinity)
  minCoins[0] = 0

  for (let i = 1; i < minCoins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coinValue = coins[j]

      if (coinValue <= i) {
        const coin = minCoins[i - coinValue] + 1
        const prevCoin = minCoins[i]

        minCoins[i] = Math.min(coin, prevCoin)
      }
    }
  }

  const answer = minCoins[minCoins.length - 1]
  return answer === Infinity ? -1 : answer
}

module.exports = coinChange
