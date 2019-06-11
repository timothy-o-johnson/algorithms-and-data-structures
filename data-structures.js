class MyArray {
  constructor (data) {
    this.length = 0
    this.data = {}
    return this.length
  }

  get (index) {
    return this.data[index]
  }

  push (element) {
    this.data[this.length] = element
    this.length++
    return this.length
  }

  pop () {
    console.log('\npop!')
    delete this.data[this.length - 1]
    this.length--
    return this.length
  }

  toString () {
    var printLine = ''

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        printLine += `"${this.data[i]}"`
      } else {
        printLine += `"${this.data[i]}", `
      }
    }
    console.log(`(${this.length})  [${printLine}]`)
    console.log(JSON.stringify(this.data))
  }

  deleteAtIndex (index) {
    console.log(`\ndelete: ${index} !`)
    if (index > this.length - 1) {
      console.log('err: out of bounds')
      return null
    }
    console.log('before: ')
    this.toString()

    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length]

    this.length--

    console.log('after: ')
    this.toString()
    console.log('\n')
  }

  unshift (item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.data[0] = item
    this.length++
    
    this.toString()

    return null
  }
}

let dog = new MyArray()

console.log(dog.push('1 fish'))
console.log(dog.push('2 fish'))
console.log(dog.push('red fish'))
console.log(dog.push('blue fish'))
console.log(dog.push('5 fish'))
dog.toString()

console.log(dog.pop())
dog.toString()

dog.deleteAtIndex(0)
dog.unshift('pig!')
