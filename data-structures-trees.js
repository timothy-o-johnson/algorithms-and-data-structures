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
        node.right === null ? (node.right = newNode) : binarySearchInsert(value, node.right)
      } else if (value < node.value) {
        node.left === null ? (node.left = newNode) : binarySearchInsert(value, node.left)
      } else {
        console.log(`node already exists`)
      }
    }
  }
  lookup (value) {
    // confirm that there is a root
    let node = this.root
    let result = binarySearchLookUp(value, node)

    return result

    function binarySearchLookUp (value, node) {
      if (node) {
        if (value === node.value) {
          console.log(`node found: ${value}! \n${JSON.stringify(node)}`)
          return node
        } else {
          return value > node.value ? binarySearchLookUp(value, node.right) : binarySearchLookUp(value, node.left)
        }
      } else {
        console.log('value not found')
        return false
      }
    }
  }

  remove (value) {
    // find matching node
    let nodeToRemove = this.lookup(value)

    // find single leaf on left side
    let replacementNode = findSingleLeaf(nodeToRemove)

    replacementNode.left = nodeToRemove.left
    replacementNode.right = nodeToRemove.right
    // remove reference to node to be removed
    replaceParentReference(value, this.root, replacementNode)

    nodeToRemove = replacementNode

    // clear the replacement node's parent
    replaceMatchingNodeWithValue(replacementNode.left, replacementNode.value, null)

    function findSingleLeaf (node) {
      let leaf = null
      let currentNode = node

      while (leaf === null) {
        if ((currentNode.left === null) & (currentNode.right === null)) {
          leaf = currentNode
        }
        currentNode = currentNode.right
      }

      return leaf
    }

    function replaceMatchingNodeWithValue (startingNode, matchingValue, value) {
      let currentNode = startingNode

      while (currentNode.left !== null) {
        if (currentNode.left.value === matchingValue) {
          currentNode.left = value
          return
        }
        currentNode = currentNode.left
      }
    }

    function replaceParentReference (value, node, replacementNode) {
      if (node) {
        if (value === node.left.value) {
          node.left = replacementNode
          return node
        } else if (value === node.right.value) {
          node.right = replacementNode
          return node
        } else {
          return value > node.value
            ? replaceParentReference(value, node.right, replacementNode)
            : replaceParentReference(value, node.left, replacementNode)
        }
      } else {
        console.log('value not found')
        return false
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(81)
tree.insert(6)
tree.insert(20)
tree.insert(90)
tree.insert(15)
tree.insert(1)
tree.insert(12)
console.log(JSON.stringify(traverse(tree.root)))
// tree.lookup(20)
// tree.lookup(1000)
tree.remove(81)
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
// 1  6  15  170

function traverse (node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
