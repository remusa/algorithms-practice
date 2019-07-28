# Depth-first Search

* **Breadth-first search (BFS)**: algorithm for exploring a tree or a graph. In
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
  * *DFS* requires less memory than *BFS* (generally).
  * *DFS* can be easily implemented with **recursion**.
* **Disadvantages**:
  * *DFS* doesn't necessarily find the shortest path to a node, while *BFS* does.

## Pseudocode

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
