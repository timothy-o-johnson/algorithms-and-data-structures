const houseRobber = require('./dynamic-programming-house-robber')

describe('houseRobber', () => {
  test(' [2, 7, 9, 3, 1] should return 12 ', () => {
    const nums = [2, 7, 9, 3, 1]
    var expected = 12
    expect(houseRobber.rob(nums)).toEqual(expected)
  })

  test(' [1, 0, 1, 0, 1, 0, 1] should return 4', () => {
    const nums = [1, 0, 1, 0, 1, 0, 1]
    var expected = 4
    expect(houseRobber.rob(nums)).toEqual(expected)
  })

  test(' [1, 0, 1, 13, 1, 0, 1] should return 4', () => {
    const nums = [1, 0, 1, 13, 1, 0, 1]
    var expected = 15 
    expect(houseRobber.rob(nums)).toEqual(expected)
  })
})
