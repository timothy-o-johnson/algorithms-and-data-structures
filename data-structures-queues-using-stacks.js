/* Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
Notes:

You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue). */

const stacks = require('./data-structures-stacks-and-queues')

const stack = new stacks.Stack()

/**
 * Initialize your data structure here.
 */
class Queue {
  constructor () {
    this.first = null
    this.last = null
    this.length = 0
    this.stack1 = new stacks.Stack()
    this.stack2 = new stacks.Stack()
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push (x) {
    this.stack1.push(x)
    this.length = this.stack1.length
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop () {
    let poppedItem
    // transfer all the elements from the first stack to second stack then pop as if nothing happened, as if they were in this order already
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }

    // pop off item
    poppedItem = this.stack2.pop()

    // then put all the items back in the original array so we can do this again

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop())
    }

    this.length = this.stack1.length
    return poppedItem
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek () {
    let peekedItem
    // transfer all the elements from the first stack to second stack then pop as if nothing happened, as if they were in this order already
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }

    // peek item
    peekedItem = this.stack2.peek()

    // then put all the items back in the original array so we can do this again

    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop())
    }

    console.log(`peek: ${peekedItem}!`)
    return peekedItem
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  isEmpty () {
    return this.length === 0
  }

  printQueue () {
    // transfer all the elements from the first stack to second stack then pop as if nothing happened, as if they were in this order already
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }

    // print queue & return to stack1
    let currentNode
    let list = ''

    while (!this.stack2.isEmpty()) {
      currentNode = this.stack2.pop()
      list += ` ${currentNode} `
      this.stack1.push(currentNode)
    }

    console.log(`(${this.stack1.length}) ${list} `)
  }
}

//  Your MyQueue object will be instantiated and called as such:
var obj = new Queue()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.printQueue()
obj.pop()
obj.printQueue()
obj.pop()
obj.printQueue()
obj.pop()
obj.peek()
obj.printQueue()