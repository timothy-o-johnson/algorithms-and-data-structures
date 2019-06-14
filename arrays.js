// function reverse (str) {
//   let reversedString = str.split('')
//   reversedString = reversedString.reverse()
//   reversedString = reversedString.join('')

//   console.log(reversedString)
// }

// reverse('This is my name')

// const arr1 = [69, 0, 3, 4, 4, 4, 44, 55, 31, 33, 55]
// const arr2 = [4, 6, 30]

// mergeSortedArrays(arr1, arr2)

// function mergeSortedArrays (arr1, arr2) {
//   // test that data is correct
//   arr1 = sortArray(arr1)
//   arr2 = sortArray(arr2)

//   // could use concatonate and then sort
//   let arr2size = arr2.length
//   let arr1size = arr1.length

//   let arr1Index = 0
//   let arr2Index = 0

//   let sortedArray = []

//   // assuming sorted before
//   while (arr1Index < arr1size && arr2Index < arr2size) {
//     if (arr1[arr1Index] <= arr2[arr2Index]) {
//       sortedArray.push(arr1[arr1Index])
//       arr1Index++
//     } else if (arr1[arr1Index] > arr2[arr2Index]) {
//       sortedArray.push(arr2[arr2Index])
//       arr2Index++
//     }
//   }

//   // add the rest of the array -- we could use splice
//   if (arr2Index < arr2size) {
//     for (let i = arr2Index; i < arr2size; i++) {
//       sortedArray.push(arr2[i])
//     }
//   } else if (arr1Index < arr1size) {
//     for (let i = arr1Index; i < arr1size; i++) {
//       sortedArray.push(arr1[i])
//     }
//   }

//   console.log(sortedArray.toString())
// }
// // [39, 1, 2, 13]

// function sortArray (arr) {
//   // confirm data type
//   let sortedArr = []
//   let numbers = {}

//   let numbersKeys

//   for (let i = 0; i < arr.length; i++) {
//     if (numbers[arr[i]]) {
//       numbers[arr[i]]++
//     } else {
//       numbers[arr[i]] = 1
//     }
//   }

//   numbersKeys = Object.keys(numbers)

//   numbersKeys.map(key => {
//     let repeat = numbers[key]
//     for (let i = 0; i < repeat; i++) {
//       sortedArr.push(parseInt(key))
//     }
//     return true
//   })

//   return sortedArr
// }

// console.log(sortArray(arr1))

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

function maxSubarray (arr) {
  let max = arr[0]
  let current = 0 

  for (let i = 0; i < 0; i++) {
    current = arr[i] 
    if(max < current){
      max = current
    }

  }

  return max
}
