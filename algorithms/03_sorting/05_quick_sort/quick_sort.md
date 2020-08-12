# Quick Sort

| Quick Sort | Worst case | Average case  | Best case     | Space       | Stable |
| ---------- | ---------- | ------------- | ------------- | ----------- | ------ |
| complexity | `O(n^2)`   | `O(n log(n))` | `O(n log(n))` | `O(log(n))` | `no`   |

- **Quick Sort**: _divide-and-conquer_ algorithm.
- Divides a large array into two smaller sub-arrays: the low elements and the high elements, then
  _recursively_ sorts the subarrays.
- _Space efficient_: quick sort takes `O(log(n))` memory space.
- _Speed depends on the pivot_: how quick the algorithm is depends on how good the pivot is.
- _Comparison-based algorithm_.
- _Unstable algorithm_: does not distinguish between two or more items, even if they're equivalent.
- Solves the subproblems _recursively_ (each subproblem is smaller than the original problem).
- Steps:
  1. _Divide_: chooses an element in the subarray and use it as _pivot_. Rearrange the elements in
     array[p..r] so that all elements in array[p..r] that are less than or equal to the pivot are to
     its left and all elements that are greater than the pivot are to its right. We call this
     procedure _partitioning_.
  2. _Conquer_: _partitions_ and recursively sorts the subarrays array[p..q-1] (elements to the left
     of the pivot, less than or equal to the pivot) and array[q+1..r] (all elements to the right of
     the pivot, which must be greater than the pivot).
  3. _Combine_: nothing is done. Once the _conquer_ step recursively sorts, all elements to the left
     of the pivot, in array[p..q-1], are less than or equal to the pivot and are sorted, and all
     elements to the right of the pivot, in array[q+1..r], are greater than the pivot and are
     sorted. The array[p..r] is already sorted.

## Algorithm

```pseudocode
_# choose pivot_
swap a[1,rand(1,n)]

_# 2-way partition_
k = 1
for i = 2:n, if a[i] < a[1], swap a[++k,i]
swap a[1,k]
_→ invariant: a[1..k-1] < a[k] <= a[k+1..n]_

_# recursive sorts_
sort a[1..k-1]
sort a[k+1,n]
```

## References

- [Quicksort - Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [Algorithms: Quicksort - HackerRank](https://www.youtube.com/watch?v=SLauY6PpjW4)
- [Quicksort algorithm overview | Quick sort (article) | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)
- [Linear-time partitioning (article) | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/linear-time-partitioning)
- [Algorithms: Quicksort - HackerRank](https://www.youtube.com/watch?v=SLauY6PpjW4)
- [Quick Sort - Sorting Algorithm Animations | Toptal](https://www.toptal.com/developers/sorting-algorithms/quick-sort)
- [Quick-sort with Hungarian (Küküllőmenti legényes) folk dance - YouTube](https://www.youtube.com/watch?v=ywWBy6J5gz8)
