const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort (array) {
  let smallest = null
  let smallestIndex = null
  let current = null
  let currentIndex = null
  let temp = null

  for (let i = 0; i < array.length; i++) {
    // initialize smallest value
    smallest = array[i]
    smallestIndex = i

    // loop through list
    for (let j = i + 1; j < array.length; j++) {
      current = array[j]
      currentIndex = j
      // compare smallest with current
      if (current < smallest) {
        smallest = current
        smallestIndex = currentIndex
      }
      // if current number is smallest record its value and its index
    }
    // at end of the list replace what is at outer loop index with smallest number index
    temp = array[i]
    array[i] = smallest
    array[smallestIndex] = temp
    printArray(array)
  }
  return numbers
}

function printArray (array) {
  let print = ''
  for (let i = 0; i < array.length; i++) {
    print += array[i] + ' '
  }
  console.log(print)
}

console.log(selectionSort(numbers))
