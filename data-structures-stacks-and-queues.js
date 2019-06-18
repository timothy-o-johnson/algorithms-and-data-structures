class Node {
  constructor (value) {
    this.value = value
  }
}

class Stack {
  constructor () {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek () {
    if (this.length !== 0) {
      console.log(`peek: ${this.top.value}!`)
    }
    return this.length !== 0 ? this.top.value : console.log('(0) empty stack')
  }

  // 5 -- 4 -- 3 -- 2 -- 1
  push (value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    this.length++
    this.printStack()
  }

  pop () {
    let popped

    if (this.length > 0) {
      popped = this.top.value
      this.top = this.top.next
      this.length--
    }

    if (this.length === 0) {
      this.top = null
      this.bottom = null
    }

    this.printStack()

    return popped || '(0) stack is empty'
  }

  printStack () {
    let currentNode = this.top
    let stack = ''

    if (currentNode) {
      while (currentNode && currentNode.next !== null) {
        stack += ` ${currentNode.value} -->`
        currentNode = currentNode.next
      }

      console.log(`(${this.length}) ${stack} ${currentNode.value}`)
    }
    console.log(this)
  }

  isEmpty () {
    return !this.length
  }
}

class ArrayStack {
  constructor () {
    this.stack = []
  }

  peek () {
    if (this.stack.length !== 0) {
      console.log(`peek: ${this.stack[this.stack.length - 1]}!`)
    }
    return this.stack.length !== 0 ? this.stack[this.stack.length - 1] : console.log('(0) empty stack')
  }

  // 5 -- 4 -- 3 -- 2 -- 1
  push (value) {
    this.stack.push(value)

    this.printStack()
  }

  pop () {
    let popped = this.stack.pop()

    this.printStack()

    return popped || '(0) stack is empty'
  }

  printStack () {
    console.log(this.stack)
  }

  isEmpty () {
    return !this.stack.length
  }
}

const myStack = new ArrayStack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.peek()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.peek()