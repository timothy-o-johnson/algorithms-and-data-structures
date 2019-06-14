// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
// It should return 1

// Given an array = [2, 3, 4, 5]:
// It should return undefined

var input = [2, 5, 1, 2, 3, 5, 1, 2, 4]

function firstRecurringCharacter (input) {
  let charMap = {}

  for (let i = 0; i < input.length; i++) {
    let key = input[i]
    if (charMap[key]) {
      return key
    } else {
      charMap[key] = true
    }
  }

  return undefined
}

// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

module.exports = { firstRecurringCharacter }
