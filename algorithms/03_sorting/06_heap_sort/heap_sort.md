# Heap Sort

| Heap Sort  | Worst case    | Average case  | Best case     | Space  | Stable |
| ---------- | ------------- | ------------- | ------------- | ------ | ------ |
| complexity | `O(n log(n))` | `O(n log(n))` | `O(n log(n))` | `O(1)` | `no`   |

* **Heap Sort**: like an improved selection sort.
* Divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a *heap data structure* rather than a linear-time search to find the maximum.
* *Comparison-based algorithm*.
* *Unstable algorithm*: does not distinguish between two or more items, even if
  they're equivalent.

## Algorithm

```
# heapify
for i = n/2:1, sink(a,i,n)
→ invariant: a[1,n] in heap order

# sortdown
for i = 1:n,
    swap a[1,n-i+1]
    sink(a,1,n-i)
    → invariant: a[n-i+1,n] in final position
end

# sink from i in a[1..n]
function sink(a,i,n):
    # {lc,rc,mc} = {left,right,max} child index
    lc = 2*i
    if lc > n, return # no children
    rc = lc + 1
    mc = (rc > n) ? lc : (a[lc] > a[rc]) ? lc : rc
    if a[i] >= a[mc], return # heap ordered
    swap a[i,mc]
    sink(a,mc,n)
```

## Resources

* [Heapsort - Wikipedia](https://en.wikipedia.org/wiki/Heapsort)
* [Heap Sort - Sorting Algorithm Animations |
  Toptal](https://www.toptal.com/developers/sorting-algorithms/heap-sort)
* [Heap Sort | Brilliant Math & Science
  Wiki](https://brilliant.org/wiki/heap-sort/)
* [algorithm - Quicksort vs heapsort - Stack
  Overflow](https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort)
* [HEAP-sort with Hungarian (MEZŐSÉGI) folk dance -
  YouTube](https://www.youtube.com/watch?v=Xw2D9aJRBY4)
