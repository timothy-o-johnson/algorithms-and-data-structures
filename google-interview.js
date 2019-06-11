/*
key points
given an array and integer.
return true/false if two numbers in the array will equal the integer
is data sorted? if so, binomial search

ex. 1
arr = [1, 2, 3, 9]
sum = 8
result = false

ex. 2
arr = [1, 2, 4, 4]
sum = 8
result = true

what are we optimizing for? speed, space

*/

// brute force: two for loops for O(n^2)

// var arr = [1, 2, 4, 4]
// var sum = 8

// function equalToSum (array, sum) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] + array[j] === sum && i !== j) {
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(equalToSum(arr, sum))

var arr = [4, 1, 8, 8]
var sum = 8

console.log(equalToSum(arr, sum))

function equalToSum (array, sum) {
  // start with first and last indices determine what pair is needed for success
  let arrayHas = {} // contains numbers the forward index needs to make sum
  // let backwardHas = {} // contains numbers the back index needs to make sum

  let forwardIndex = 0
  let backwardIndex

  let forwardNeeds, backwardsNeeds

  for (forwardIndex = 0; forwardIndex < array.length / 2; forwardIndex++) {
    backwardIndex = array.length - forwardIndex - 1

    // if (forwardIndex < backwardIndex) {
    // see if they make the sum
    if (array[forwardIndex] + array[backwardIndex] === sum) {
      return true
    } else {
      // determine if we've come across the matching number before

      // handle forward traverse
      forwardNeeds = sum - array[forwardIndex]
      if (arrayHas[forwardNeeds]) {
        return true
      } else {
        // save what forward has
        arrayHas[array[forwardIndex]] = true
      }

      // handle backwards traverse
      backwardsNeeds = sum - array[backwardIndex]
      if (arrayHas[backwardsNeeds]) {
        return true
      } else {
        // save what backwards has
        arrayHas[array[backwardIndex]] = true
      }
    }

    // store this value in hashmap
    // if pairs aren't found in the map, increment
    // stop when indexes overlap and no pair is found
    // }
  }
  return false
}
