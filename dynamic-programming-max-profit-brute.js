/* Say you have an array for which the ith element is the price of a given stock on day i.

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

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {
  let purchasePrice, salePrice, profit
  let max = 0
  
  // loop through each prices
  for (let i = 0; i < prices.length; i++) {
    purchasePrice = prices[i]

    // look at each following day prices
    for (let j = i + 1; j < prices.length; j++) {
      salePrice = prices[j]
      profit = salePrice - purchasePrice
       // find and store max profit
      max =  profit > max ? profit: max 
    }
  }
 
 return max
 
}

const prices = [20, 18, 1, 1, 5, 3, 6, 4, 20, 1]

console.log('max profit: $', maxProfit(prices))
