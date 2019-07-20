/*Say you have an array for which the ith element is the price of a given stock on day i.

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

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value)
  }

  insert(value) {
    // create new node
    const newNode = new Node(value)

    // place in the appropriate place
    insertionHelper(newNode, this.root)
    function insertionHelper(newNode, currentNode) {
      const value = newNode.value

      // if larger than the current node
      if (value >= currentNode.value) {
        // if currentNode.right is null place it here
        if (currentNode.right === null) {
          currentNode.right = newNode
        } else {
          // else continue down to the right
          insertionHelper(newNode, currentNode.right)
        }
      }

      // do the same for the left side
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
        } else {
          // else continue down to the right
          insertionHelper(newNode, currentNode.left)
        }
      }
    }
  }

  printTree(node) {
    console.log(JSON.stringify(node))
  }

  lookup(value) {
    let result = null

    if (value === this.root.value) {
      result = this.root
    } else {
      result = lookupHelper(value, this.root)

      function lookupHelper(value, currentNode) {
        let result = null

        if (currentNode.value < value) {
          if (currentNode.right && currentNode.right.value === value) {
            result = currentNode.right
          } else if (currentNode.right !== null) {
            result = lookupHelper(value, currentNode.right)
          }
        }

        if (currentNode.value > value) {
          if (currentNode.left && currentNode.left.value === value) {
            result = currentNode.left
          } else if (currentNode.left !== null) {
            result = lookupHelper(value, currentNode.left)
          }
        }

        return result
      }
    }

    return result
  }
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0
  let node, price

  let newSearchTree = new BinarySearchTree(prices[0])
  // put the data into a binomial search tree
  for (let i = 1; i < prices.length; i++) {
    newSearchTree.insert(prices[i])
  }

  newSearchTree.printTree(newSearchTree.root)
  const getHighestPrice = getHighestPriceMaster()
  let highestPrice = 0
  // take each price find the highest value that follows
  for (let i = 0; i < prices.length; i++) {
    price = prices[i]
    node = newSearchTree.lookup(price)
    highestPrice = getHighestPrice(node)
    console.log(`${price}: ${highestPrice}`)
    maxProfit = (highestPrice - price) > maxProfit ? (highestPrice - price) : maxProfit
    console.log('maxProfit', maxProfit)
  }

  function getHighestPriceMaster(node) {
    let cache = {}
    let count = 0

    return function getHighestPrice(node) {
      console.log('count: ', count++)
      if (cache[node.value]) {
        console.log(`cache: ${node.value}`)
        return cache[node.value]
      } else if (node.right === null) {
        cache[node.value] = node.value
        return node.value
      } else {
        return getHighestPrice(node.right)
      }
    }
  }
  // calculate the profit
  // if profit is greater than current max, replace with new max profit
  // return the maxProfit value
}

const prices = [2, 0, 1, 5, 3, 6, 4, 20, 1]

maxProfit(prices)
