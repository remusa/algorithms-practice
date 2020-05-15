class Graph {
  constructor() {
    // using an object is cheaper than using an array/matrix
    this.adjacencyList = {}
    this.numberOfNodes = 0
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      this.numberOfNodes++
    }

    return this
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
    this.numberOfNodes--
    return this
  }

  addEdge(vertex1, vertex2) {
    // undirected graph, for directed graphs we would only insert in v1->v2
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
    return this
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2,
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1,
    )
    return this
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacencyList)
    const printedList = []

    for (const node of allNodes) {
      const nodeConnections = this.adjacencyList[node]
      let connections = ''
      let vertex

      for (vertex of nodeConnections) {
        connections += `${vertex} `
      }

      printedList.push([node, connections])
    }

    return printedList
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

console.log(myGraph.showConnections())

const g = new Graph()

g.addVertex('Dallas')
g.addVertex('Tokyo')
g.addVertex('Aspen')
g.addVertex('Los Angeles')
g.addVertex('Hong Kong')

g.addEdge('Dallas', 'Tokyo')
g.addEdge('Dallas', 'Aspen')
g.addEdge('Hong Kong', 'Tokyo')
g.addEdge('Hong Kong', 'Dallas')
g.addEdge('Los Angeles', 'Hong Kong')
g.addEdge('Los Angeles', 'Aspen')

g.removeEdge('Dallas', 'Aspen')
g.removeEdge('Dallas', 'Tokyo')

g.removeVertex('Dallas')
g.removeVertex('Tokyo')

console.log(g.showConnections())

module.exports = {
  Graph,
}
