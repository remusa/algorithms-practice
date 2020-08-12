class Graph {
  constructor() {
    // using an object is cheaper than using an array/matrix
    this.adjacencyList = new Map()
    this.numberOfNodes = 0
  }

  addNode(node) {
    this.adjacencyList.set(node, [])
    this.numberOfNodes++
  }

  removeNode(node) {
    while (this.adjacencyList.get(node).length) {
      const adjacentVertex = this.adjacencyList.get(node).pop()
      this.removeEdge(node, adjacentVertex)
    }

    this.adjacencyList.delete(node)
    this.numberOfNodes--
  }

  addEdge(origin, destination) {
    // undirected graph, for directed graphs we would only insert in v1->v2
    this.adjacencyList.get(origin).push(destination)
    this.adjacencyList.get(destination).push(origin)
  }

  removeEdge(origin, destination) {
    this.adjacencyList.set(
      origin,
      this.adjacencyList.get(origin).filter(v => v !== destination),
    )
    this.adjacencyList.set(
      destination,
      this.adjacencyList.get(destination).filter(v => v !== origin),
    )
  }

  showConnections() {
    return this.adjacencyList
  }

  depthFirstRecursive(root) {
    const path = []
    const adjacencyList = this.adjacencyList

    function dfs(start, visited = new Set()) {
      if (!start) {
        return null
      }

      visited.add(start)
      path.push(start)

      const destinations = adjacencyList.get(start)

      for (const destination of destinations) {
        if (!visited.has(destination)) {
          dfs(destination, visited)
        }
      }
    }

    dfs(root)

    return path
  }

  depthFirstIterative(start) {
    const path = []
    const stack = [start]
    const visited = {}
    let currentVertex

    visited[start] = true

    while (stack.length) {
      currentVertex = stack.pop()
      path.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return path
  }

  breadthFirst(start) {
    const queue = [start]
    const visited = new Set()
    const path = []

    visited[start] = true

    while (queue.length) {
      const currentNode = queue.shift()
      const destinations = this.adjacencyList.get(currentNode)

      for (const destination of destinations) {
        path.push(destination)

        if (!visited.has(destination)) {
          visited.add(destination)
          queue.push(destination)
        }
      }
    }

    return path
  }
}

function example1() {
  const g = new Graph()

  g.addNode('0')
  g.addNode('1')
  g.addNode('2')
  g.addNode('3')
  g.addNode('4')
  g.addNode('5')
  g.addNode('6')

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

  g.addNode('Dallas')
  g.addNode('Tokyo')
  g.addNode('Aspen')
  g.addNode('Los Angeles')
  g.addNode('Hong Kong')

  g.addEdge('Dallas', 'Tokyo')
  g.addEdge('Dallas', 'Aspen')
  g.addEdge('Hong Kong', 'Tokyo')
  g.addEdge('Hong Kong', 'Dallas')
  g.addEdge('Los Angeles', 'Hong Kong')
  g.addEdge('Los Angeles', 'Aspen')

  g.removeEdge('Dallas', 'Aspen')
  g.removeEdge('Dallas', 'Tokyo')

  g.removeNode('Dallas')
  g.removeNode('Tokyo')

  console.log(g.showConnections())
}

function example3() {
  const g = new Graph()

  g.addNode('A')
  g.addNode('B')
  g.addNode('C')
  g.addNode('D')
  g.addNode('E')
  g.addNode('F')

  g.addEdge('A', 'C')
  g.addEdge('A', 'B')
  g.addEdge('B', 'D')
  g.addEdge('C', 'E')
  g.addEdge('D', 'E')
  g.addEdge('D', 'F')
  g.addEdge('E', 'F')

  console.log(g.showConnections())

  console.log('dfs_recursive', g.depthFirstRecursive('A'))
  // console.log('dfs_iterative', g.depthFirstIterative('A'))
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

example1()
example2()
example3()

module.exports = {
  Graph,
}
