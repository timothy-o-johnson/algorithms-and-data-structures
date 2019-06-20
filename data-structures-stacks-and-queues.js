// class Node {
//   constructor (value) {
//     this.value = value
//   }
// }

// class Stack {
//   constructor () {
//     this.top = null
//     this.bottom = null
//     this.length = 0
//   }

//   peek () {
//     if (this.length !== 0) {
//       console.log(`peek: ${this.top.value}!`)
//     }
//     return this.length !== 0 ? this.top.value : console.log('(0) empty stack')
//   }

//   // 5 -- 4 -- 3 -- 2 -- 1
//   push (value) {
//     const newNode = new Node(value)

//     if (this.length === 0) {
//       this.top = newNode
//       this.bottom = newNode
//     } else {
//       newNode.next = this.top
//       this.top = newNode
//     }

//     this.length++
//     this.printStack()
//   }

//   pop () {
//     let popped

//     if (this.length > 0) {
//       popped = this.top.value
//       this.top = this.top.next
//       this.length--
//     }

//     if (this.length === 0) {
//       this.top = null
//       this.bottom = null
//     }

//     this.printStack()

//     return popped || '(0) stack is empty'
//   }

//   printStack () {
//     let currentNode = this.top
//     let stack = ''

//     if (currentNode) {
//       while (currentNode && currentNode.next !== null) {
//         stack += ` ${currentNode.value} -->`
//         currentNode = currentNode.next
//       }

//       console.log(`(${this.length}) ${stack} ${currentNode.value}`)
//     }
//     console.log(this)
//   }

//   isEmpty () {
//     return !this.length
//   }
// }

// class ArrayStack {
//   constructor () {
//     this.stack = []
//   }

//   peek () {
//     if (this.stack.length !== 0) {
//       console.log(`peek: ${this.stack[this.stack.length - 1]}!`)
//     }
//     return this.stack.length !== 0 ? this.stack[this.stack.length - 1] : console.log('(0) empty stack')
//   }

//   // 5 -- 4 -- 3 -- 2 -- 1
//   push (value) {
//     this.stack.push(value)

//     this.printStack()
//   }

//   pop () {
//     let popped = this.stack.pop()

//     this.printStack()

//     return popped || '(0) stack is empty'
//   }

//   printStack () {
//     console.log(this.stack)
//   }

//   isEmpty () {
//     return !this.stack.length
//   }
// }

// const myStack = new ArrayStack()

// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.peek()
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.peek()

class Node {
  constructor (value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

// 1 -- 2 -- 3 -- 4 -- 5

class Queue {
  constructor () {
    this.first = null
    this.last = null
    this.length = 0
  }
  peek () {
    console.log(`peek: ${this.first ? this.first.value : 'no items in queue'}!`)
  }

  /**
   * add an item to the queue from the rear
   * @param {*} value 
   */
  enqueue (value) {
    // create new node
    const newNode = new Node(value)

    // if length is zero, point value to first & last
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      // if not add node to end
      this.last.next = newNode
      // this.last.prev = this.last

      newNode.prev = this.last
      // newNode.next = null

      this.last = newNode
    }

    this.length++
    this.printQueue()
  }

  /**
   * remove the front item from the queue
   */
  dequeue () {
    if (this.length <= 1) {
      this.first = null
      this.last = null
      this.length = 0
    } else {
      const secondNode = this.first.next
      secondNode.prev = null
  
      this.first = secondNode

      this.length--
    }
    this.printQueue()
  }
  // isEmpty;

  printQueue () {
    let currentNode = this.first
    if (currentNode) {
      let list = ''
      let prev
      let next

      while (currentNode.next !== null) {
        prev = getNodeValue('prev')
        next = getNodeValue('next')

        list += `${currentNode.value} (${prev},${next}) -- `
        currentNode = currentNode.next
      }

      prev = getNodeValue('prev')
      next = getNodeValue('next')

      console.log(`(${this.length}) ${list}${currentNode.value} (${prev},${next})`)
    } else {
      console.log(`(${this.length}) no items!`)
    }
    console.log(this)

    function getNodeValue (key) {
      return currentNode[key] ? currentNode[key].value : currentNode[key]
    }
  }
}
const myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.peek()
myQueue.enqueue(4)
myQueue.enqueue(5)
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.peek()
myQueue.dequeue()
myQueue.dequeue()
myQueue.peek()