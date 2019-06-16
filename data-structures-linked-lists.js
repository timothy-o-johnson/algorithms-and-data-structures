// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append (value) {
    // insert before tail
    // create node
    const newNode = {
      value: value,
      next: null
    }

    // update the last node by reference
    this.tail.next = newNode

    // point reference to tail to newNode by reference
    this.tail = newNode
    this.length++

    return console.log(JSON.stringify(this))
  }

  prepend (value) {
    const newNode = {
      value: value,
      next: this.head
    }

    this.head = newNode
    this.length++

    console.log(JSON.stringify(this))
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log('all done!')
