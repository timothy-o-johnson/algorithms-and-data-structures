/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12. */

/* [1,0,1,0,1,0]
// odds = 3

[1,0,1,13,1,0]
// 0st,3

[0,1,2,3,4,5,6,7,8,9]

poppedValue = arr.pop() */

// what are the different, valid combinations
// if array is the length is 1; return that value
// otherwise, shorten the array (pop the value going on two different paths (skip 1 (pop() x1 ) or skip 2 pop()x2)
// take the poppedValue
// return max(popppedValue + sum(arraySkip1), poppedValue + sum(arraySkip2))

let count = 0
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob (nums) {
  let popped, arraySkip1, arraySkip2
  console.log(nums.join(''))
  
  count++
  // this is the bottom, build from here
  if (nums.length < 2) {
    return nums[0] || 0
  }

  popped = nums.shift()
  arraySkip1 = nums.slice(1, nums.length)
  arraySkip2 = nums.slice(2, nums.length)

  return Math.max(popped + rob(arraySkip1), popped + rob(arraySkip2))
}

let nums = [2, 7, 9, 3, 1]
// let nums = [1,2,3,1]

console.log(rob(nums))
console.log('total calls: ', count)

module.exports = {
  rob
}