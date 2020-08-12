# Radix Sort

| Radix Sort | Worst case | Average case | Best case | Space    | Stable |
| ---------- | ---------- | ------------ | --------- | -------- | ------ |
| complexity | `O(nk)`    | `Θ(nk)`      | `Ω(nk)`   | `O(n+k)` | `no`   |
| complexity | `O(nk)`    | `O(nk)`      | `O(nk)`   |          |        |

- Where:

  - `n`: length of array.
  - `k`: number of digits (average).

- **Radix Sort**:

  - _Non-comparison algorithm_: the fastest we can hope to get with a comparison algorithm is
    `O(n log n)`.
  - _Unstable algorithm_: does not distinguish between two or more items, even if they're
    equivalent.
  - _Only works with base-10 integers_:
    - Restricted range (fixed-length integers) because of the way numbers are stored in memory.
    - Never makes comparisons between elements.
    - Exploits the fact that information about the size of a number is encoded in the number of
      digits.
    - More digits = bigger number.

- Create 10 different buckets for each digit in base-10 (0-9).
- Go through the entire list of numbers and look at the last digit (the first from right to left).
- Move the numbers to their respective bucket. (`902` to bucket `2`). The items in the bucket are
  not sorted.
- Form a new list based on the order of the buckets (0-9).
- Move to the next digit (second to last digit) and start again.
- If a digit has `0`, then it already is in it's corresponding bucket (`7 = 07`, it would be in
  bucket `0`).

## Pseudocode

```
Define a function that accepts list of numbers
Figure out how many digits the largest number has
Loop from k = 0 up to this largest number of digits
For each iteration of the loop:
  Create buckets for each digit (0 to 9)
  place each number in the corresponding bucket based on its kth digit
Replace our existing array with values in our buckets, starting with 0 and going up to 9
return list at the end
```

## Resources

- [Radix sort - Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)
- [Radix Sort | Brilliant Math & Science Wiki](https://brilliant.org/wiki/radix-sort/)
- [Radix Sort Visualzation](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html)
