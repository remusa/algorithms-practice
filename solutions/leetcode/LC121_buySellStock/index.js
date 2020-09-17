/*
121. Best Time to Buy and Sell Stock
Easy
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// Time complexity: O(n) -> traverse array once
// Space complexity: O(1) -> hold 2 variables
function maxProfit(prices) {
  let maxProfit = 0
  let low = prices[0]

  for (const price of prices) {
    // If the current price is the lowest we've seen update it
    low = Math.min(low, price)

    // Calculate the new profit
    const profit = price - low

    // Update maxProfit if the new profit beats out the previous one
    maxProfit = Math.max(maxProfit, profit)
  }

  return maxProfit
}

// Time complexity: O(n) -> traverse array once
// Space complexity: O(1) -> hold 2 variables
function maxProfit2(prices) {
  let maxProfit = 0
  let low = prices[0]

  for (const price of prices) {
    // Calculate the new profit
    const profit = price - low

    // If the current price is the lowest we've seen update it
    if (price < low) low = price

    // Update maxProfit if the new profit beats out the previous one
    if (profit > maxProfit) maxProfit = profit
  }

  return maxProfit
}

export { maxProfit, maxProfit2 }
