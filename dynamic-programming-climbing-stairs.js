/* You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step */

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs (n) {
  let combinations = _stairMaster(n)

  function _stairMaster (stairsToClimb) {
    let cache = {}
    let count = 0 

    return function stairHelper (stairsToClimb) {
      if (cache[stairsToClimb]) {
        console.log(`${stairsToClimb}: ${cache[stairsToClimb]}`)
        
        return cache[stairsToClimb]
      } else {

        console.log('count: ', count++)
        if (stairsToClimb === 0) {
          return 1
        } else if (stairsToClimb < 1) {
          return 0
        } else {
          cache[stairsToClimb] = stairHelper(stairsToClimb - 1) + stairHelper(stairsToClimb - 2)
          return cache[stairsToClimb]
        }
      }
    }
  }

  return combinations
}

let stairClimber = climbStairs()

console.log(stairClimber(10))

// 4
// 1. 1, 1, 1, 1
// 2. 1, 1, 2
// 3. 2, 2
// 4. 2, 1, 1
// 5. 1, 2, 1
