/*
    This is a classic technical interview question that I've seen a number of times in interviews. Let's say you're given an array of stock prices, with each element being an integer that represents a price.

    Each index thus represents a day, and the the element in that index is the stock price for that given day.

    So this array below means: day 0 - $10, day 1 - $7, day 2 - $6 and so on:

    const prices = [ 10, 7, 6, 2, 9, 4 ];
    ​
    Can you write a stock optimizer method stockOptimizer? Given the ability to only buy once and sell once, our goal is to maximize the amount of profit (purchase price - selling price) that we can attain and return that value. Note the only caveat is that that we cannot sell a stock before we buy one, which is important in identifying a solution. See the following examples for clarification:

    stockOptimizer([ 10, 7, 6, 2, 9, 4 ]) // 7
    ​
    For the above, the max profit is made when we buy on day/index 3 (when the price is 2) and sell on day/index 4 (when the price is 9). Let's do another example.

    stockOptimizer([9, 8, 6, 5, 3]) // 0
    ​
    From a quick glance, it seems like there's enough price differences to generate a profit. However, notice that the price drops every day, and thus we can't have a profit since we're required to buy before selling.
*/

function stockOptimizer(prices) {
  let max = 0
  let profit = 0
  let i = prices.length - 1

  while (i >= 0) {
    const stock = prices[i]

    if (stock > max) {
      max = stock
    }

    const currentProfit = max - stock

    if (currentProfit > profit) {
      profit = currentProfit
    }

    i--
  }

  return profit
}

module.exports = {
  stockOptimizer,
}
