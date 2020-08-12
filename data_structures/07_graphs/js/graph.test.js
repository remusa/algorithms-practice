import { Graph } from './graph'

describe('graph tests', () => {
  it('should perform the operations in the adjacency list graph', () => {
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

    expect(myGraph.showConnections()).toEqual([
      ['0', '1 2 '],
      ['1', '3 2 0 '],
      ['2', '4 1 0 '],
      ['3', '1 4 '],
      ['4', '3 2 5 '],
      ['5', '4 6 '],
      ['6', '5 '],
    ])

    // Answer:
    // 0-->1 2
    // 1-->3 2 0
    // 2-->4 1 0
    // 3-->1 4
    // 4-->3 2 5
    // 5-->4 6
    // 6-->5
  })

  it('should perform the operations in the adjacency list graph 2', () => {})

  it('should perform the operations in the adjacency list graph 3', () => {})
})
