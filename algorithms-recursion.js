// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive (number) {
  if (number === 1) {
    return number * 1
  }
  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative (number) {
  let answer = 1

  for (let i = number; i > 1; i--) {
    answer *= i
  }

  return answer
}

// console.log(findFactorialIterative(5))
// console.log(findFactorialRecursive(5))

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5 (5), 8 (6), 13 (7), 21 (8), 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

// For example: fibonacciRecursive(6) should return 8

function fibonacciIterative (n) {
  if (n === 0) {
    return 0
  }
  // code here;
  let prev1 = 0
  let prev2 = 1
  let total = 1

  for (let i = 2; i <= n; i++) {
    total = prev2 + prev1

    prev1 = prev2
    prev2 = total
  }

  return total
}

// console.log(fibonacciIterative(0))
// console.log(fibonacciIterative(1))
// console.log(fibonacciIterative(2))
// console.log(fibonacciIterative(3))
// console.log(fibonacciIterative(4))
// console.log(fibonacciIterative(5))
// console.log(fibonacciIterative(6))
// console.log(fibonacciIterative(7))
// console.log(fibonacciIterative(8))
// console.log(fibonacciIterative(9))

function fibonacciRecursive (n) {
  if (n === 0) {
    return 0
  } else if (n <= 2) {
    return 1
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

// console.log('...recursive...')
// console.log(fibonacciRecursive(8))
// console.log(fibonacciRecursive(0))
// console.log(fibonacciRecursive(1))
// console.log(fibonacciRecursive(2))
// console.log(fibonacciRecursive(3))
// console.log(fibonacciRecursive(4))
// console.log(fibonacciRecursive(5))
// console.log(fibonacciRecursive(6))
// console.log(fibonacciRecursive(7))
// console.log(fibonacciRecursive(8))
// console.log(fibonacciRecursive(9))

// Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursion (str, iteration) {
  iteration = iteration === undefined ? 0 : iteration
  let frontLetter = str[iteration]
  let backLetter = str[str.length - 1 - iteration]
  const middle = Math.floor(str.length / 2)

  if (iteration >= middle) {
    return str
    // swap index from front and back until we get to center
  } else {
    str = str.split('')
    str[iteration] = backLetter
    str[str.length - 1 - iteration] = frontLetter
    str = str.join('')

    return reverseStringRecursion(str, iteration + 1)
  }
}

console.log(reverseStringRecursion('some insane yoyo mastery'))
// should return: 'yretsam oyoy'
