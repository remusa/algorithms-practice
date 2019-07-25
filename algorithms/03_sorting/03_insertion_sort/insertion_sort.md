# Insertion Sort

| Insertion Sort | Worst case | Average case | Best case | Space  | Stable |
| -------------- | ---------- | ------------ | --------- | ------ | ------ |
| complexity     | `O(n^2)`   | `O(n^2)`     | `O(n)`    | `O(1)` | `yes`  |

* **Insertion sort**: works by selecting the first element of the list and
  looking at the next item. If it's smaller, we swap them. Then we select
  the next index of the list with the previously sorted items, and we *insert*
  it in the correct position.
* Useful when list is *already or almost* sorted.
* Inefficient on large lists.
* Generally, *insertion sort* performs better than *selection sort*.

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
* [Insert-sort with Romanian folk dance -
  YouTube](https://www.youtube.com/watch?v=ROalU379l3U)
