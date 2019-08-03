# Graphs

| Operation | Worst case  |
| --------- | ----------- |
| space     | ``          |
| access    | `O(log(n))` |
| search    | `O(log(n))` |
| insert    | `O(log(n))` |
| delete    | `O(log(n))` |

* **Graphs**: organizes items in an interconnected network.
* *Nodes or vertex*: each item int he graph.
* *Edges*: connection between the nodes.

## Strengths and Weaknesses

* **Strengths**:
  * *Representing links*: graphs are ideal for working with *interconnected
    things*. Example:
    * Cities and highways.
    * Routers and ethernet cables.
    * Social network users.
* **Weaknesses**:
  * *Slow*: most graph algorithms are `O(nlog(n))` or slower.

## Concepts

### Directed or Undirected

* **Directed**: edges point from the node at one end to the node at the other end.
* **Undirected**: edges simply connect nodes at each end.

### Cyclic or Acyclic

* **Cyclic**: a *cycle* is a serie of unbroken series of nodes with no repeating
  nodes or edges that connects back to itsef.
* **Ayclic**: a graph without cycles.

### Weighted or Unweighted

* **Weighted**: when each node has a *weight* (a value, like distance, cost or time).
* **Unweighted**: graphs without cycles.

### Legal coloring

* **Graph coloring**: when colors are assigned to each node in a graph.
* *Legal coloring*: no adjacent nodes have the same color.

## Graph Representations

### Edge list

* **Edge list**: a list of all the edges in the graph.

```javascript
const graph = [[0, 1], [1, 2], [1, 3], [2, 3]]
```

## Adjacency list

* **Adjacency list**: a list that represents the node and the value at that
  index is a list of the node's neighbors.

```javascript
const graph = [
    [1],        // node 1
    [0, 2, 3],  // node 2
    [1, 3],     // node 3
    [1, 2],     // node 4
]
```

* Can be represented with an object.

```javascript
  const graph = {
    0: [1],
    1: [0, 2, 3],
    2: [1, 3],
    3: [1, 2],
}
```

## Adjacency matrix

* **Adjacency matrix**: a matrix of `1`s and `0`s that indicate whether node `x`
  connects to node `y` (`0` is no, `1` is yes).

```javascript
const graph = [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
]
```

## Algorithms

* Finding the shortest path: BFS.
* If you know a solution is not far from the root of the tree: BFS.
* If the tree is very deep and solutions are rare: BFS (DFS will take a long time).
* If the tree is very wide: DFS (BFS will need too much memory).
* If solutions are frequent but located deep in the tree: DFS.
* Determining whether a path exists between two nodes: DFS.

* Is there a path between two nodes in this undirected graph? Run DFS or BFS from one node and see if you reach the other one.
* What's the shortest path between two nodes in this undirected, unweighted graph? Run BFS from one node and backtrack once you reach the second. Note: BFS always finds the shortest path, assuming the graph is undirected and unweighted. DFS does not always find the shortest path.
* Can this undirected graph be colored with two colors? Run BFS, assigning colors as nodes are visited. Abort if we ever try to assign a node a color different from the one it was assigned earlier.
* Does this undirected graph have a cycle? Run BFS, keeping track of the number of times we're visiting each node. If we ever visit a node twice, then we have a cycle.

## Advanced algorithms

* **Dijkstra's Algorithm**: finds the shortest path from one node to all other nodes in a weighted graph.
* **Topological Sort**: arranges the nodes in a directed, acyclic graph in a special order based on incoming edges.
* **Minimum Spanning Tree**: finds the cheapest set of edges needed to reach all nodes in a weighted graph.

## Find shortest path algorithms

* Useful when finding shortest path, but unlike *BFS*, they take into account weights.

* **Dijkstra**:
  * Determines the shortest path from one node in a graph to *every other node* within the same graph, provided that the nodes are reachable from the starting node.
  * *Faster than Bellman-Ford*: on average.
* **Bellman-Ford**:
  * Can accomodate *negative weights*.
  * *Slow*: time complexity of `O(n^2)`.

## Resources

* [Graph Data Structure: Directed, Acyclic, etc | Interview Cake](https://www.interviewcake.com/concept/javascript/graph)
* [Describing graphs (article) | Algorithms | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs)
* [Representing graphs (article) | Algorithms | Khan
  Academy](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs)
* [Finding The Shortest Path, With A Little Help From
  Dijkstra](https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e)
* [Algorithms: Graph Search, DFS and BFS -
  YouTube](https://www.youtube.com/watch?v=zaBhtODEL0w)
