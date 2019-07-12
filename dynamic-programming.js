//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0
function fibonacci(n) {
  //O(2^n)
  calculations++
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacciMaster() {
  //O(n)
  let cache = {}
  return function fib(n) {
    calculations++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}
function fibonacciMaster2(n) {
  let answer = [0, 1]
  for (let i = 2; i <= n; i++) {
    calculations++
    answer.push(answer[i - 2] + answer[i - 1])
  }
  return answer.pop()
}

const n = 44
const fasterFib = fibonacciMaster()

console.log("Slow", fibonacci(n))
console.log(new Intl.NumberFormat("en-US").format(calculations) + " calculations")
calculations = 0
// 40 =   331,160,281 calculations
// 41 =   535,828,591 calculations
// 42 =   866,988,873 calculations
// 43 = 1,402,817,465 calculations
// 44 = 2,269,806,339 calculations

console.log("\nDP", fasterFib(n))
console.log(new Intl.NumberFormat("en-US").format(calculations) + " calculations")
calculations = 0

console.log("\nDP2", fibonacciMaster2(n))
console.log(new Intl.NumberFormat("en-US").format(calculations) + " calculations")
