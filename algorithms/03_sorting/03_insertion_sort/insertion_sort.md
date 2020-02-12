# Insertion Sort

| Insertion Sort | Worst case | Average case | Best case | Space  | Stable |
| -------------- | ---------- | ------------ | --------- | ------ | ------ |
| complexity     | `O(n^2)`   | `O(n^2)`     | `O(n)`    | `O(1)` | `yes`  |

* **Insertion sort**: sorts the list starting from the beginning and *inserting*
  the unsorted elements in the corresponding place of the already sorted list.
* It works by selecting the first element of the list and
  looking at the next item. If it's smaller, we swap them. Then we select
  the next index of the list and compare it with the previously sorted items, and we *insert*
  it in the correct position.
* *Stable*: doesn't modify the already sorted elements.
* Useful when list is *already or almost* sorted.
* Inefficient on large lists.
* Generally, *insertion sort* performs better than *selection sort*.

## Pseudocode

```
Call the first element of the array sorted
Repeat until all elements are sorted:
    Insert next unsorted item into sorted part shifting the required number of items
```

```
For i from 1 to n–1
    Insert next unsorted item into sorted part shifting i items
```

## Algorithm

```
for i = 2:n,
    for (k = i; k > 1 and a[k] < a[k-1]; k--)
        swap a[k,k-1]
    → invariant: a[1..i] is sorted
end
```

## Insert function

* To insert an element into its correct position, we repeatedly compare it with
  the elements to its left, going right to left.
* Each time we find that the key is less than an element to its left, we slide that element one position to the right, since we know that the key will have to go to that element's left.

## Example

### Pass 1

```
i
3	7	2	5
```

The sorted part of the list is initially empty, so we increment `i`, and move on to the next item.

### Pass 2

```
 	   ||i
 	3	7	2	5
sorted ||	unsorted
```

For this pass, the item at index `i` is compared with the item at index `i - 1`. Since `7` is greater than `3`, the items are in the correct order and this pass is complete.

### Pass 3

```
 	   ||i
 	3	7	2	5
sorted ||	unsorted
```

For this pass, the item at `i`, which is 2, needs to be inserted into the sorted part of the list.

```
 	 	 ||i
 	 	 	  5
sorted 	 || unsorted
```

We know that the value 5 will stay in its current location as we only work with the value at index i and the sorted part of the list.

```
 	 	  ||i
 	 	   7	5
sorted 	  || unsorted
```

Since the `2` is less than `7`, we move the `7` over one position to the right.

```
 	 	   ||i
		3	7	5
sorted 	   || unsorted
```

Since the `2` is less than `3`, we move the `3` over one position to the right.

```
 	 	   ||i
	2	3	7	5
sorted 	   || unsorted
```

Now, the `2` is inserted at index `0`.

### Pass 4

```
 	 	   ||i
2	3	7	5
sorted 	   || unsorted
```

For this pass, the item at `i`, which is `5`, needs to be inserted into the sorted part of the list.

```
 	 	   ||i
2	3		7
sorted 	   || unsorted
```

Since the `5` is less than `7`, we move the `7` over one position to the right.

```
 	 	   ||i
2	3	5	7
sorted 	   || unsorted
```

Since `5` is greater than `3`, the `5` is inserted after the `3`.

```
2	3	5	7
```

Our list is now sorted.

## References

* [Insertion sort - Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
* [Insertion sort (article) | Algorithms | Khan
  Academy](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)
* [Insertion sort pseudocode (article) | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort-pseudocode)
* [Insertion Sort - Sorting Algorithm Animations |
  Toptal](https://www.toptal.com/developers/sorting-algorithms/insertion-sort)
* [Insert-sort with Romanian folk dance -
  YouTube](https://www.youtube.com/watch?v=ROalU379l3U)
