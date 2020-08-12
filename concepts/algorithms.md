# Algorithms

## Types of Algorithms

### 1. Recursive Algorithm

- Calls itself with a smaller value as inputs which it gets after solving for the current inputs
  (calls itself repeatedly until the problem is solved).
- Examples:
  - Tower of Hanoi.
  - DFS.

## 2. Divide and Conquer Algorithm

- Divide the algorithm into two parts, the first parts divides the problem on hand into smaller
  subproblems of the same type. Then on the second part, these smaller problems are solved and then
  added together (combined) to produce the final solution of the problem.
- Example:
  - Merge Sort.

## 3. Dynamic Programming Algorithm

- These algorithms work by remembering the results of the past run and using them to find new
  results. In other words, dynamic programming algorithm solves complex problems by breaking it into
  multiple simple subproblems and then it solves each of them once and then stores them for future
  use.
- Example:
  - Memoized Fibonacci sequence.

## 4. Greedy Algorithm

- These algorithms are used for solving optimization problems. In this algorithm, we find a locally
  optimum solution (without any regard for any consequence in future) and hope to find the optimal
  solution at the global level.
- The method does not guarantee that we will be able to find an optimal solution.
- Examples:

  - Huffman Coding.
  - Dijkstra’s algorithm.

- The algorithm has 5 components:
  - The first one is a candidate set from which we try to find a solution.
  - A selection function which helps choose the best possible candidate.
  - A feasibility function which helps in deciding if the candidate can be used to find a solution.
  - An objective function which assigns value to a possible solution or to a partial solution
  - Solution function that tells when we have found a solution to the problem.

## 5. Brute Force Algorithm

- Blindly iterates all possible solutions to search one or more than one solution that may solve a
  function.
- Example:
  - Linear Search.

## Resources

- [Types of Algorithms | Learn The Top 6 Important Types of Algorithms](https://www.educba.com/types-of-algorithms/)
- [definition - What is the difference between a heuristic and an algorithm? - Stack Overflow](https://stackoverflow.com/questions/2334225/what-is-the-difference-between-a-heuristic-and-an-algorithm)
