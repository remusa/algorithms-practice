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

// Note: The problem is the Change-Making problem (https://en.wikipedia.org/wiki/Change-making_problem), the most common variation of Coin Change problem. Change-Making problem is a variation of the Knapsack problem, more precisely - the Unbounded Knapsack problem, also known as the Complete Knapsack problem.

// Time complexity: O(a * c) -> where a is the amount, and c is the number of coins
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

// Time complexity: O(n * k) -> where n is the amount, and k is the number of coins
// Space complexity: O(n) -> additional array of length "amount"
function coinChange2(coins, amount) {
  // Use a tracker and build it up 1 coin at a time to avoid recalculating the best combinations

  // Initialize an array with the number of indices equal to amount + 1
  // The last index of the array will hold the number of coins we needed to arrive there
  const dp = Array(amount + 1).fill(Infinity)

  // First index is 0 so it's best possible value is 0 (for amount 0 we would need 0 coins)
  dp[0] = 0

  // For each cell in the dp array
  for (let i = 0; i < dp.length; i++) {
    // Test every coin that is <= that cell's amount (the index)
    for (const coin of coins) {
      if (coin <= i) {
        // Test a coin by substracting it's value from the cell's index (returns the index of the already filled out cell). Increment 1 because we would be adding a coin
        const test = dp[i - coin] + 1

        // Update the current index with the minimum amount of coins
        dp[i] = Math.min(dp[i], test)
      }
    }
  }

  // Return the minimum value (last index) once we reached the end
  const minCoins = dp[amount]

  // Return a valid combination if found
  if (minCoins < Infinity) return minCoins

  // There were no possible combinations so return -1
  return -1
}

export { coinChange, coinChange2 }
