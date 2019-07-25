# Bubble Sort

| Bubble Sort | Worst case | Average case | Best case | Space  | Stable |
| ----------- | ---------- | ------------ | --------- | ------ | ------ |
| complexity  | `O(n^2)`   | `O(n^2)`     | `O(n)`    | `O(1)` | `yes`  |

* **Bubble sort**: comparison algorithm uses the idea of *bubbling up* the
  largest value using multiple passes.
* *Stable*: doesn't modify the already sorted elements.
* *Slow*: bubble sort always requires *2 passes* through the data.
* Compares each pair of adjacent items and swaps them if they are in the wrong
  order.
* It works by taking the first unsorted element of the array and walking through
  the rest of the array, comparing it with the element in the next index. If the
  second element is smaller, we *swap* the values until the largest element is
  sorted at the end.
* Elements are sorted by the end, moving the largest element to the last
  unsorted index.

## Algorithm

```
for i = 1:n,
    swapped = false
    for j = n:i+1,
        if a[j] < a[j-1],
            swap a[j,j-1]
            swapped = true
    → invariant: a[1..i] in final position
    break if not swapped
end
```

## Example

We'll start at index `i` and work towards end of list `e`

### Pass 1

```
i  			e
7	3	5	2
```

Compare the item at index `i` with the item at `i + 1`. Since `7` is greater than `3`, they are swapped.

```
 	i 		e
3	7	5	2
```

Increase `i` by 1. Compare the item at index `i` with the item at `i + 1`. Since `7` is greater than `5`, they are swapped.

```
  		i	e
3	5	7	2
```

Increase `i`  1. Compare the item at index `i` with the item at `i + 1`. Since `7` is greater than `2`, they are swapped.

```
   			e
3	5	2	7
```

This pass is complete. The largest item in the list, `7`, is in its correct location.

### Pass 2

```
i 		e  ||
3	5	2	7
unsorted   || sorted
```

`i` initially refers to `0`. Compare the item at index `i` with the item at `i + 1`. Since `3` is less than `5`, nothing needs to be swapped.

```
	i 	e  ||
3	5	2	7
unsorted   || sorted
```

Increase `i` by 1. Compare the item at index `i` with the item at `i + 1`. Since `5` is greater than `2`, they are swapped.

```
		e   ||
3	2	5	7
unsorted	|| 	 sorted
```

This pass is complete. The second largest item in the list, `5`, is in its correct location.

### Pass 3

```
	i	e	||
 	3	2	5	7
unsorted	|| 	 sorted
```

`i` initially refers to `0`. Compare the item at index `i` with the item at `i + 1`. Since `3` is greater than `2`, they are swapped.

```
2	3	5	7
```

This pass is complete. The list is now sorted!

## References

* [Bubble sort - Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
* [Algorithms: Bubble Sort - HackerRank](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
* [Bubble Sort - Sorting Algorithm Animations |
  Toptal](https://www.toptal.com/developers/sorting-algorithms/bubble-sort)
* [Bubble-sort with Hungarian ("Csángó") folk dance - YouTube](https://www.youtube.com/watch?v=lyZQPjUT5B4)
