var count = 0

function factorial (n) {
  if (n < 1) {
    return 1
  } else {
    var total = 0
    var i = 0

    for (; i < n; i++) {
      console.log(count++)
      total += 1
    }
    console.log(n, total)
    return total * factorial(n-1)
  }
}

 console.log(factorial(100))
count
