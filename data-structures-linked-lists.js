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
      const newNode = new Node(value)

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next
      }

      newNode.next = currentNode.next
      currentNode.next = newNode

      this.length++
      this.printlist()
    }
  }

  getNodeAtIndex (index) {
    let currentNode = this.head
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    // console.log(`value of node at index ${index} is ${currentNode.value}`)
    return currentNode
  }

  remove (index) {
    // point node prior to index to the node after index

    if (index > 0 && index < this.length - 1) {
      const indexOfPriorNode = index - 1
      let nodePriorToIndex = this.getNodeAtIndex(indexOfPriorNode)
      nodePriorToIndex.next = this.getNodeAtIndex(index).next
    } else if (index === 0) {
      this.head = this.head.next
    } else if (index >= this.length - 1) {
      let secondToLastNode = this.getNodeAtIndex(this.length - 2)
      secondToLastNode.next = null
      this.tail = secondToLastNode
    }
    this.length--
    this.printlist()
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 2)
myLinkedList.insert(0, 99)
myLinkedList.insert(15, 99)
myLinkedList.insert(-3, 102)
myLinkedList.getNodeAtIndex(3)
myLinkedList.remove(4)
myLinkedList.remove(0)
myLinkedList.remove(6)

console.log('all done!')
