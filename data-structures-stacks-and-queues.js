class Node {
  constructor (value) {
    this.value = value
    this.next = null
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
    return this.length !== 0 ? this.top.value : console.log('empty stack')
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

    this.printStack()

    return popped || 'stack is empty'
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
  }
}

const myStack = new Stack()

myStack.push(null)
myStack.push(2)
myStack.push(3)
myStack.peek()
myStack.push(4)
myStack.peek()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack.pop())
console.log(myStack.pop())
myStack.push(2)
myStack.push(3)
console.log(myStack.pop())
myStack.peek()
myStack.push(4)
myStack.peek()


// Discord
// Udemy
// google
