const numbers = [10, 9, 4, 3, 2, 1, 8, 7, 6, 5, 0]

function quickSort (array, left, right) {
  console.log('\n\nquickSort array:')
  printArray(array)

  if (right - left <= 0) {
    return
  }

  const m = partition(array, left, right)

  // array  = a[low... m-1], m (the pivot), a [m + 1... high]
  quickSort(array, left, m - 1) // recursively sort left
  quickSort(array, m + 1, right) //  recursivelys sort right, skipping m because it's already sorted in partition
}

function partition (array, left, right) {
  let arrayElement, temp, lastElementInS1
  const pivot = array[left]
  let pivotIndex = left

  // console.log('\nstart:')

  // initially subpartition1 (values <pivot) and subpartition2 are empty
  // explore unknown region
  for (let i = left + 1; i <= right; i++) {
    arrayElement = array[i]

    if (arrayElement < pivot) {
      // move into supartition1
      pivotIndex++ // intially, the element right next to pivot
      temp = array[pivotIndex]
      array[pivotIndex] = arrayElement
      array[i] = temp
      //    printArray(array)
    }
  }

  // place the pivot in its right place (between subpart1 and subpart2) ie the last element in the
  lastElementInS1 = array[pivotIndex]
  array[left] = lastElementInS1
  array[pivotIndex] = pivot
  // console.log('final:')
  // printArray(array)

  return pivotIndex
}

// // Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1)
// console.log(numbers)

function printArray (array) {
  let print = ''
  for (let i = 0; i < array.length; i++) {
    print += array[i] + ' '
  }
  console.log(print)
}

// partition(numbers, 2, numbers.length - 1)
