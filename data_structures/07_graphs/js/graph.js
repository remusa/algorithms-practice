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
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
    this.numberOfNodes--
  }

  addEdge(vertex1, vertex2) {
    // undirected graph, for directed graphs we would only insert in v1->v2
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
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

  depthFirstRecursive(root) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) {
        return null
      }

      visited[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }

    dfs(root)

    return result
  }

  depthFirstIterative(root) {
    const result = []
    const stack = [root]
    const visited = {}
    let currentVertex

    visited[root] = true

    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  breadthFirst(root) {
    const queue = [root]
    const result = []
    const visited = {}
    let currentVertex

    visited[root] = true

    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }

    return result
  }
}

function example1() {
  const g = new Graph()

  g.addVertex('0')
  g.addVertex('1')
  g.addVertex('2')
  g.addVertex('3')
  g.addVertex('4')
  g.addVertex('5')
  g.addVertex('6')

  g.addEdge('3', '1')
  g.addEdge('3', '4')
  g.addEdge('4', '2')
  g.addEdge('4', '5')
  g.addEdge('1', '2')
  g.addEdge('1', '0')
  g.addEdge('0', '2')
  g.addEdge('6', '5')

  console.log(g.showConnections())
}

function example2() {
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
}

function example3() {
  const g = new Graph()

  g.addVertex('A')
  g.addVertex('B')
  g.addVertex('C')
  g.addVertex('D')
  g.addVertex('E')
  g.addVertex('F')

  g.addEdge('A', 'C')
  g.addEdge('A', 'B')
  g.addEdge('B', 'D')
  g.addEdge('C', 'E')
  g.addEdge('D', 'E')
  g.addEdge('D', 'F')
  g.addEdge('E', 'F')

  console.log(g.showConnections())

  console.log('dfs_recursive', g.depthFirstRecursive('A'))
  console.log('dfs_iterative', g.depthFirstIterative('A'))
  console.log('bfs', g.breadthFirst('A'))

  //          A
  //        /   \
  //       B     C
  //       |     |
  //       D --- E
  //        \   /
  //          F

  // QUEUE: []
  // RESULT: [A, B, C, D, E, F]
}

example3()

module.exports = {
  Graph,
}
