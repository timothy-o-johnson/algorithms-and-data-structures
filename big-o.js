// const nemo = ['nemo']

// function findNemo (array) {
//   let t0 = window.performance.now()
//   for (let i = 0; i < array.length; i++) {
//     if (array[0] === 'nemo') {
//       console.log('Found NEMO!')
//     }
//   }

//   let t1 = performance.now()
//   console.log(`Call to find Nemo took ${t1 - t0} milliseconds`)
// }

// const largeArray = new Array(100).fill('nemo')

// findNemo(largeArray)

/* log all pairs of an array */

// var array = [1, 2, 3, 4, 5]

// array.forEach(element => {
//   array.forEach(pair => {
//     if (element !== pair) {
//       console.log(`${element} ${pair}`)
//     }
//   })
// })

/* EXERCISE 50: Interview Question */
// two arrays
// inputs: two arrays-- just letters? will they be sorted
// outputs: bool
// what's the most important value of problem: time, space, memory? what's the goal
// brute force: loop through one, then through the other O(m * n)
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

console.log(findCommonItems(array1, array2))

function findCommonItems (array1, array2) {
  var largeArray, smallArray
  var biggest = Math.max(array1.length, array2.length)

  if (biggest === array1.length) {
    largeArray = array1
    smallArray = array2
  } else {
    largeArray = array2
    smallArray = array1
  }

  var largeArrPosition = 0
  var smallHash = {}
  var largeValue, smallValue

  // while there is still values in the larger array
  while (largeArrPosition < (largeArray.length)) {
    // for each increment loop through both arrays
    largeValue = largeArray[largeArrPosition]

    // do special work in case we are outside the bounds of the smaller array
    if (smallArray[smallArray.length - largeArrPosition - 1]) {
      smallValue = smallArray[smallArray.length - largeArrPosition - 1]
    }

    if (largeValue === smallValue) {
      return true
    } else {
      // if the largeValue is in the smallHash, return true
      if (smallHash[largeValue]) {
        return true
      } else {
        // else store the smaller array value in a hashtable
        smallHash[smallValue] = true
        largeArrPosition++
      }
    }
  }
  return false
}

// work backwards for one and compare against the other

// check the smaller hash table for a match if one exists, return true
// else add the smaller number to the hashtable
// increment/decrement
