class Graph {
  constructor () {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex (node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = []
      this.numberOfNodes++
    }
  }

  addEdge (node1, node2) {
    // undirected Graph
    const edge = [node1, node2]

    edge.forEach(node => {
      let nodeList = this.adjacentList[node]
      let newConnection = node === node1 ? node2 : node1
      let connectionExists = false

      nodeList.forEach(existingConnection => {
        // check to see if connection already exists
        if (existingConnection === newConnection) {
          connectionExists = true
        }
      })

      if (!connectionExists) {
        nodeList.push(newConnection)
      }
    })
  }

  showConnections () {
    const allNodes = Object.keys(this.adjacentList)
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node]
      let connections = ''
      let vertex
      for (vertex of nodeConnections) {
        connections += vertex + ' '
      }
      console.log(node + ' --> ' + connections)
    }
  }
}

const myGraph = new Graph()
myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')

myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')
myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')

myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')

myGraph.showConnections()
// Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
