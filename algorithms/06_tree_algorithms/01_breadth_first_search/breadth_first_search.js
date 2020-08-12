/* A Queue object for queue-like functionality over JavaScript arrays. */
const Queue = function() {
  this.items = []
}
Queue.prototype.enqueue = function(obj) {
  this.items.push(obj)
}
Queue.prototype.dequeue = function() {
  return this.items.shift()
}
Queue.prototype.isEmpty = function() {
  return this.items.length === 0
}

/*
 * Performs a breadth-first search on a graph
 * @param {array} graph - Graph, represented as adjacency lists.
 * @param {number} source - The index of the source vertex.
 * @returns {array} Array of objects describing each vertex, like
 *     [{distance: _, predecessor: _ }]
 */
const doBFS = function(graph, source) {
  const bfsInfo = []

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null,
    }
  }

  bfsInfo[source].distance = 0

  const queue = new Queue()
  queue.enqueue(source)

  // Traverse the graph
  // As long as the queue is not empty:
  while (!queue.isEmpty()) {
    //  Repeatedly dequeue a vertex u from the queue.
    const u = queue.dequeue()

    //  For each neighbor v of u that has not been visited:
    for (let i = 0; i < graph[u].length; i++) {
      const v = graph[u][i]

      if (bfsInfo[v].distance === null) {
        //  Set distance to 1 greater than u's distance
        bfsInfo[v].distance = bfsInfo[u].distance + 1
        //  Set predecessor to u
        bfsInfo[v].predecessor = u
        //  Enqueue v
        queue.enqueue(v)
      }
    }
  }

  //  Hint:
  //  use graph to get the neighbors,
  //  use bfsInfo for distances and predecessors

  return bfsInfo
}

const adjList = [[1], [0, 4, 5], [3, 4, 5], [2, 6], [1, 2], [1, 2, 6], [3, 5], []]

const bfsInfo = doBFS(adjList, 3)
for (const i = 0; i < adjList.length; i++) {
  println(`vertex ${i}: distance = ${bfsInfo[i].distance}, predecessor = ${bfsInfo[i].predecessor}`)
}

// Program.assertEqual(bfsInfo[0], {distance: 4, predecessor: 1});
// Program.assertEqual(bfsInfo[1], {distance: 3, predecessor: 4});
// Program.assertEqual(bfsInfo[2], {distance: 1, predecessor: 3});
// Program.assertEqual(bfsInfo[3], {distance: 0, predecessor: null});
// Program.assertEqual(bfsInfo[4], {distance: 2, predecessor: 2});
// Program.assertEqual(bfsInfo[5], {distance: 2, predecessor: 2});
// Program.assertEqual(bfsInfo[6], {distance: 1, predecessor: 3});
// Program.assertEqual(bfsInfo[7], {distance: null, predecessor: null});
