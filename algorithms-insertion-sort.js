const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort (array) {
  printArray(array)
  let current, currentIndex, prev, prevIndex, temp, i
  // loop through list
  for (i = 1; i < array.length; i++) {
    currentIndex = i
    current = array[currentIndex]
    prevIndex = i - 1
    prev = array[prevIndex]

    // compare current element with element to its left
    // if it is smaller than that element swap it
    // repeat until current value is larger than the element to its left
    while (prev > current) {
      temp = prev
      array[prevIndex] = current
      array[currentIndex] = temp

      // update prev and location of current element
      prev = array[--prevIndex]
      currentIndex--
    }
    printArray(array)
  }
}

function printArray (array) {
  let print = ''
  for (let i = 0; i < array.length; i++) {
    print += array[i] + ' '
  }
  console.log(print)
}

insertionSort(numbers)
console.log(numbers)
