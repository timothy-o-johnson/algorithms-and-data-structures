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
    this.before = null
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

    // update lead node
    let leadNode = this.tail
    leadNode.next = newNode

    // update newNode (before, next)
    newNode.before = leadNode
    newNode.next = null

    // point tail to newNode by reference
    this.tail = newNode
    this.length++

    this.printlist()
    // console.log(JSON.stringify(this))
  }

  prepend (value) {
    // create new node
    const newNode = new Node(value)

    // update previous head.before to point to new node
    this.head.before = newNode

    // point new Node's next to current head
    newNode.next = this.head

    // point head to new Node
    this.head = newNode
    this.length++
    this.printlist()

    // console.log(JSON.stringify(this))
  }

  printlist () {
    let list = ''
    let currentNode = this.head

    while (currentNode.next !== null) {
      // get before and after values
      let before = currentNode.before ? currentNode.before.value : null
      let after = currentNode.next ? currentNode.next.value : null

      list += `${currentNode.value} (${before}, ${after})--> `
      currentNode = currentNode.next
    }

    console.log(`(${this.length}) ${list}${currentNode.value} (${currentNode.before.value}, ${currentNode.next})`)
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
      // create new node
      const newNode = new Node(value)

      // get current node at index
      let nodeAtIndex = this.getNodeAtIndex(index)

      // set it as leadNode
      let leadNode = nodeAtIndex
      newNode.before = leadNode

      // newNode's next is leadNode's next
      newNode.next = leadNode.next

      // update current node at index (next -- leave before untouched)
      leadNode.next = newNode

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
