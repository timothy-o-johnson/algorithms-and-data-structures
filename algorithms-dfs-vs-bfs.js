//If you know a solution is not far from the root of the tree:
//breadth

//If the tree is very deep and solutions are rare: 
// breadth-- although memory intensive; depth will take a long time since we use recursion


//If the tree is very wide:
// depth first (breadth will use a lot of memory)

//If solutions are frequent but located deep in the tree:
//depth

//Determining whether a path exists between two nodes:
// depth (that's the point)

//Finding the shortest path:
// breadth (that's the point)
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return null
    }
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child: 
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    BreadthFirstSearch() {
        let currentNode = this.root;
        let list = []; // search results
        let queue = []; // pointers to nodes that need to be checked
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    BreadthFirstSearchR(queue, list) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.BreadthFirstSearchR(queue, list);
    }

    //      9
    //   4     20
    // 1  6  15  170

    traverseInOrder(list, currentNode) {

        if (currentNode.left !== null) {
            this.traverseInOrder(list, currentNode.left)
        }

        list.push(currentNode.value)

        if (currentNode.right !== null) {
            this.traverseInOrder(list, currentNode.right)
        }
        //console.log(JSON.stringify(list))
        return list
    }

    traversePreOrder(list, currentNode) {
        list.push(currentNode.value)

        if (currentNode.left !== null) {
            this.traversePreOrder(list, currentNode.left)
        }

        if (currentNode.right !== null) {
            this.traversePreOrder(list, currentNode.right)
        }
        return list
    }

    traversePostOrder(list, currentNode) {


        if (currentNode.left !== null) {
            this.traversePostOrder(list, currentNode.left)
        }

        if (currentNode.right !== null) {
            this.traversePostOrder(list, currentNode.right)
        }

        list.push(currentNode.value)
        return list
    }

    validateBFS(queue, list) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();

        list.push(currentNode.value);
        const left = currentNode.left
        const right = currentNode.right
        const leftValue = left ? left.value : null
        const rightValue = right ? right.value : null 
        const leftIsGreaterThanCurrentNode = currentNode.value < leftValue && left !== null
        const rightIsLessThanCurrentNode = currentNode.value > rightValue && right !== null

        if (rightIsLessThanCurrentNode || leftIsGreaterThanCurrentNode || currentNode.value === null) {
            console.log('not valid')
            return -1
        }

        if (left) {
            queue.push(left);
        }
        if (right) {
            queue.push(right);
        }

        return this.validateBFS(queue, list);
    }

    printTree(){
        console.log(JSON.stringify(this.root))

}

}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

// console.log('BFS', tree.BreadthFirstSearch());
// console.log('BFS', tree.BreadthFirstSearchR([tree.root], []))

console.log(tree.traverseInOrder([], tree.root))
console.log(tree.traversePreOrder([], tree.root))
console.log(tree.traversePostOrder([], tree.root))
console.log(tree.validateBFS([tree.root], []))

tree.printTree()

//     9
//  4     20
//1  6  15  170

var node = {
    left: {
      left: { left: null, right: null, value: 1 },
      right: { left: null, right: null, value: 10 },
      value: 4
    },
    right: {
      left: { left: null, right: null, value: 15 },
      right: { left: null, right: null, value: 170 },
      value: 20
    },
    value: 9
  }

tree.root = node

console.log(tree.validateBFS([tree.root], []))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}





