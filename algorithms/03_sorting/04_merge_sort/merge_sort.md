# Merge Sort

| Merge Sort | Worst case    | Average case  | Best case     | Space  | Stable |
| ---------- | ------------- | ------------- | ------------- | ------ | ------ |
| complexity | `O(n log(n))` | `O(n log(n))` | `O(n log(n))` | `O(n)` | `yes`  |

* **Merge sort**: *divide-and-conquer* algorithm that sorts two smaller
  subarrays before merging them together.
* *Comparison-based algorithm*.
* *Stable algorithm*: it means that if we have equivalent elements (like 6 and
  6), these elements will keep the original order in the array.
* Solves the subproblems *recursively* (each subproblem is smaller than the
  original problem).
* Steps:
  1. *Divide*: the problem into a number of subproblems that are smaller instances of the same problem.
  2. *Conquer*: the subproblems by solving them recursively. If they are small enough, solve the subproblems as base cases.
  3. *Combine*: the solutions to the subproblems into the solution for the original problem.

## Sorting function

* Compare the lowest indices of both halves and copy the smaller element into the sorted array.
* At this point, one of the two halves has been completed copied, so we copy the
  remaining elements of the other half into the sorted array.

## Merge function

* Takes in a list that has two sorted subarrays, from [start..middle] and
  [middle+1..end], and merges the lists.
* Divide the original array into two halves and recursively sort both halves of the array.
* Merge the sorted subarrays.

## Example

1. Divide the list into the smallest unit (1 element).
2. Compare each element with the adjacent list to sort.
3. Merge the two adjacent lists.
4. Finally all the elements are sorted and merged.

## References

* [Merge sort - Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
* [Algorithms: Merge Sort - HackerRank](https://www.youtube.com/watch?v=KF2j-9iSf4Q)
* [Merge sort algorithm overview (article) | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)
* [Linear-time merging (article) | Merge sort | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/linear-time-merging)
