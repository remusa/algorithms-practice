# Depth-first Search

| Operation | Worst case |
| --------- | ---------- |
| space     | ``         |
| search    | `O(n)`     |

* *Time complexity*: `O(V + E)` where `V` is the number of nodes and E the
  number of edges. You need to traverse all nodes.
* *Space complexity*:
  * *Recursive*: `O(h)`, where `h` is the height of the tree.
  * *Iterative*:`O(V)`, same as *BFS*, just using a stack instead of a queue.

* **Depth-first search (BFS)**: algorithm for exploring a tree or a graph. In
  a DFS, you go as deep as possible down one path before backing up and trying a
  different node.
* Similar to walking through a *maze* and exploring each path until hitting a
  dead end, then going back and trying a different one.
* *Uses a stack*, instead of a queue like *BFS*.

* Steps:
  1. Start with the root.
  2. Go down the first path until you hit a dead end.
  3. Do the same thing again until you reach the end.

## Comparison with Depth-first Search

* **Advantages**:
  * *Requires less memory* than *BFS* (generally), because it's not
    neccessary to store all the child pointers at each level.
  * *Will find if a path exists*.
  * *DFS* can be implemented with **recursion**.
* **Disadvantages**:
  * *DFS* doesn't always find the shortest path to a node, while *BFS* does.

## Pseudocode

```
Initialize an empty stack for storage of nodes, S.
For each vertex u, define u.visited to be false.
Push the root (first node to be visited) onto S.
While S is not empty:
    Pop the first element in S, u.
    If u.visited = false, then:
        U.visited = true
        for each unvisited neighbor w of u:
            Push w into S.
End process when all nodes have been visited.
```

* Recursive:

```
1  procedure DFS(G,v):
2      label v as discovered
3      for all directed edges from v to w that are in G.adjacentEdges(v) do
4          if vertex w is not labeled as discovered then
5              recursively call DFS(G,w)
```

* Iterative:

```
1  procedure DFS-iterative(G,v):
2      let S be a stack
3      S.push(v)
4      while S is not empty
5          v = S.pop()
6          if v is not labeled as discovered:
7              label v as discovered
8              for all edges from v to w in G.adjacentEdges(v) do
9                  S.push(w)
```

## Resources

* [Depth-First Search (DFS) and Depth-First Traversal | Interview Cake](https://www.interviewcake.com/concept/javascript/dfs?)
* [Breadth-first search and its uses (article) | Khan
  Academy](https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/breadth-first-search-and-its-uses)
* [Depth-first search - Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)
* [Tree Traversals (Inorder, Preorder and Postorder) - GeeksforGeeks](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
* [BFS vs DFS for Binary Tree -
  GeeksforGeeks](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
* [algorithm - What is the time and space complexity of a breadth first and
  depth first tree traversal? - Stack
  Overflow](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)
* [Depth-First Search (DFS) | Brilliant Math & Science
  Wiki](https://brilliant.org/wiki/depth-first-search-dfs/)
* [Algorithms: Graph Search, DFS and BFS -
  YouTube](https://www.youtube.com/watch?v=zaBhtODEL0w)
* [Depth First Search Tutorials & Notes | Algorithms |
  HackerEarth](https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/)
