const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort (array) {
  console.log('\nstarting array: ', printArray(array))
  if (array.length === 1) {
    return array
  }
  const mid = Math.floor(array.length / 2)
  // Split Array in into right and left
  let left = array.slice(0, mid)
  let right = array.slice(mid, array.length + 1)

  console.log('left: ', printArray(left))
  console.log('right: ', printArray(right))

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  console.log('\n\nmerge')
  console.log('left: ', printArray(left))
  console.log('right: ', printArray(right))

  let mergedList = []
  // let size = left.length > right.length ? left.length : right.length
  let leftIndex = 0
  let rightIndex = 0
  let leftValue, rightValue

  leftValue = left[0]
  rightValue = right[0]

  while (leftValue || rightValue) {
    if (leftValue < rightValue || rightValue === undefined) {
      mergedList.push(leftValue)
      leftIndex++
    } else {
      mergedList.push(rightValue)
      rightIndex++
    }

    leftValue = left[leftIndex]
    rightValue = right[rightIndex]
  }
  console.log('merged array: ', printArray(mergedList))
  return mergedList
}

const answer = mergeSort(numbers)

printArray(answer)

function printArray (array) {
  let print = ''
  for (let i = 0; i < array.length; i++) {
    print += array[i] + ' '
  }
  return print
}
