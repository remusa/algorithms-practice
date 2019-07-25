# Selection Sort

| Selection Sort | Worst case | Average case | Best case | Space  | Stable |
| -------------- | ---------- | ------------ | --------- | ------ | ------ |
| complexity     | `O(n^2)`   | `O(n^2)`     | `O(n^2)`  | `O(1)` | `no`   |

* **Selection sort**: scans the list of items for the smallest element and then
  swaps that element for the one in the first position.
* Selection sort is an *in-place* comparison sort.
* Inefficient on large lists.
* Generally, *insertion sort* performs better.

## Example

### Pass 1

```
i
3	7	2	5
```

Variable `i` initially refers to `0`. We need to find the smallest value in the list and swap it with item at index `i`. The smallest value is `2`, so it is swapped with the item at `i`. Increase `i` by one.

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

We need to find the smallest value in the unsorted part of the list and swap it with the item at index `i`. The smallest value is `3`, so it is swapped with the item at `i`. Increase `i` by one.

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

We need to find the smallest value in the unsorted part of the list and swap it with the item at index `i`. The smallest value is `5`, so it is swapped with the item at `i`. Increase `i` by one.

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

* [Selection sort - Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
* [Select-sort with Gypsy folk dance -
  YouTube](https://www.youtube.com/watch?v=Ns4TPTC8whw)
* [Selection sort pseudocode (article) | Khan
  Academy](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/selection-sort-pseudocode)
