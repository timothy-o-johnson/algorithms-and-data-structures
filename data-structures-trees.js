class Node {
  constructor (value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }
  insert (value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
    } else {
      // find place in tree
      binarySearchInsert(value, this.root)
    }
    function binarySearchInsert (value, node) {
      // let node = this.root
      if (value > node.value) {
        if (node.right === null) {
          node.right = newNode
        } else {
          // set right node to current node and use recursion
          node = node.right
          binarySearchInsert(value, node)
        }
      } else if (value < node.value) {
        if (node.left === null) {
          node.left = newNode
        } else {
          // set left node to current node and use recursion
          node = node.left
          binarySearchInsert(value, node)
        }
      } else {
        console.log(`node already exists`)
      }
    }
  }
  lookup (value) {
    // confirm that there is a root
    let node = this.root
    binarySearchLookUp(value, node)

    // Code here
    function binarySearchLookUp (value, node) {
      if (node) {
        if (value === node.value) {
          console.log(`node found: ${value}! \n${JSON.stringify(node)}`)
          return node
        } else {
          value > node.value ? binarySearchLookUp(value, node.right) : binarySearchLookUp(value, node.left)
        }
      } else {
        console.log('value not found')
      }
    }
  }
  // remove
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))
tree.lookup(20)
tree.lookup(1000)
console.log(JSON.stringify(tree))

//     9
//  4     20
// 1  6  15  170

function traverse (node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
