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

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor (value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append (value) {
    // insert before tail
    // create node
    const newNode = new Node(value)

    // update the last node by reference
    this.tail.next = newNode

    // point reference to tail to newNode by reference
    this.tail = newNode
    this.length++

    this.printlist()
  }

  prepend (value) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++
    this.printlist()

    // console.log(JSON.stringify(this))
  }

  printlist () {
    let list = ''
    let currentNode = this.head

    while (currentNode.next !== null) {
      list += `${currentNode.value} --> `
      currentNode = currentNode.next
    }

    console.log(`(${this.length}) ${list}${currentNode.value}`)
  }

  insert (index, value) {
    // handle a beginning insert
    if (index === 0) {
      this.prepend(value)
      
      // handle an ending insert
    } else if (index >= this.length) {
      this.append(value)

      // handle in between
    } else {
      let currentNode = this.head

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next
      }

      const newNode = new Node(value)

      newNode.next = currentNode.next
      currentNode.next = newNode

      this.length++
      this.printlist()
    }
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 2)
myLinkedList.insert(0, 99)
myLinkedList.insert(15, 99)
myLinkedList.insert(-3, 99)
console.log('all done!')
