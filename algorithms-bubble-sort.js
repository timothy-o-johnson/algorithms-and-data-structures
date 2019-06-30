const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort (array) {
  let switches = 1
  // for each element in the array (if there's a next element-- or until we reach the last element)
  let first, second

  while (switches) {
    // reset switches
    switches = 0
    for (let i = 0; i < array.length; i++) {
      // take the current element and the next element
      first = array[i]
      second = array[i + 1]

      // if the first element is larger than the second, switch them (we can switch because we are not changing the length)
      if (first > second) {
        array[i + 1] = first
        array[i] = second
        // increment switch count
        switches++
        printArray(array)
      }
      // otherwise go the next element

      // do while switch count is greater than zero
    }
  }
}

function printArray (array) {
  let print = ''
  for (let i = 0; i < array.length; i++) {
    print += array[i] + ' '
  }
  console.log(print)
}

bubbleSort(numbers)
console.log(numbers)
