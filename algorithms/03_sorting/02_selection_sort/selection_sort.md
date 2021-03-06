# Selection Sort

| Selection Sort | Worst case | Average case | Best case | Space  | Stable |
| -------------- | ---------- | ------------ | --------- | ------ | ------ |
| complexity     | `O(n^2)`   | `O(n^2)`     | `O(n^2)`  | `O(1)` | `no`   |

- **Selection sort**: scans the list of items for the smallest element and then swaps that element
  for the one in the first position.
- Selection sort is an _in-place_ comparison sort.
- _Unstable algorithm_: does not distinguish between two or more items, even if they're equivalent.
- Inefficient on large lists.
- Generally, _insertion sort_ performs better.

## Pseudocode

```
Repeat until there is no unsorted elements remaining:
    Search unsorted part of data to find the smallest value
    Swap the found value with the first element of the unsorted part
```

```
For i from 0 to n–1
    Find smallest item between i'th item and last item
    Swap smallest item with i'th item
```

## Algorithm

```
for i = 1:n,
    k = i
    for j = i+1:n, if a[j] < a[k], k = j
    → invariant: a[k] smallest of a[i..n]
    swap a[i,k]
    → invariant: a[1..i] in final position
end
```

## Example

### Pass 1

```
i
3	7	2	5
```

Variable `i` initially refers to `0`. We need to find the smallest value in the list and swap it
with item at index `i`. The smallest value is `2`, so it is swapped with the item at `i`. Increase
`i` by one.

```
2	7	3	5
```

### Pass 2

Note that `i` now refers to the index of the first item in the unsorted part of the list.

```
 	  ||i
 	2	7	3	5
sorted||	unsorted
```

We need to find the smallest value in the unsorted part of the list and swap it with the item at
index `i`. The smallest value is `3`, so it is swapped with the item at `i`. Increase `i` by one.

```
 	  ||
 	2	3	7	5
sorted||	unsorted
```

### Pass 3

```
 	 	  ||i
 	2	3	7	5
sorted 	  ||	unsorted
```

We need to find the smallest value in the unsorted part of the list and swap it with the item at
index `i`. The smallest value is `5`, so it is swapped with the item at `i`. Increase `i` by one.

```
 	 	  ||
 	2	3	5	7
sorted 	  ||	unsorted
```

### Pass 4

```
 	 	  ||i
2	3	5	7
sorted 	  ||	unsorted
```

There is only one item left in the unsorted part, therefore the list is sorted.

## References

- [Selection sort - Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
- [Select-sort with Gypsy folk dance - YouTube](https://www.youtube.com/watch?v=Ns4TPTC8whw)
- [Selection sort pseudocode (article) | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/selection-sort-pseudocode)
- [Selection Sort - Sorting Algorithm Animations | Toptal](https://www.toptal.com/developers/sorting-algorithms/selection-sort)
