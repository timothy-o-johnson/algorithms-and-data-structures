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

    return JSON.stringify(result)
  }
}

const newTree = new BinarySearchTree(25)
const size = 6

let value = 0
for (let i = 1; i < size; i++) {
  value += i * 3 + 25
  newTree.insert(value)

  value -= 2 * i + 25
  newTree.insert(value)
}

newTree.insert(27)
newTree.insert(29)
newTree.insert(31)
newTree.insert(36)

newTree.insert(2)
newTree.insert(4)
newTree.insert(8)

newTree.printTree(newTree.root)

console.log(`\n` + newTree.lookup(37))
