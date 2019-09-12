# Arrays

## Most Frequently Occurring Item in an Array

* Use a *hash table* to keep track of the values seen.
* Go through the array once.

```
// O(n)
def most_frequent(array):
    max_count= -1
    max_item = null
    count = {}

    for item in given_array:
        if item not in count:
            count[item] = 1
        else:
            count[item] += 1
```

## Common Elements in Two Sorted Arrays

* Use a resizable data structure, like a list.
* Use two pointers, one for each array, initialized to the first element of each
  array.
* Move the pointers based on a condition.

```
// O(n)
def common_elements(A, B):
    p1 = 0
    p2 = 0
    result = []

    while p1 < A.length and p2 < B.length:
        if A[p1] == B[p2]:
            p1 += 1
            p2 += 1
        else if A[p1] > B[p2]:
            p2 += 1
        else:
            p1 += 1
```

## Is One Array a Rotation of Another?

* If one array is a rotation of another, it means that the two arrays contain
  the same elements in the same order but start at different indices.
* Length of both arrays must be the same.
* Use pointers to check the elements of one array and if they're in the same
  order in the other one.

```
// O(n) - at most go through the arrays twice
def is_rotation(A, B):
    if A.length != B.length:
        return false

    key = A[0]
    key_i = -1

    for i from 0 to B.length - 1:
        if B[i] == key:
            key_i = i
            break

    if key_i == -1:
        return false

    for i from 0 to A.length - 1:
        j = (key_i + i) % A.length

        if A[i] != B[j]:
            return false

    return true
```

## Container With Most Water

* `O(n^2)`: for each height, check all heights ahead of it, calculate the `area` then calculate `maxArea`.
* Create a `left` pointer at the start of the array and a `right` pointer at the end.
* Calculate the area of that container.
* Shrink the base of the container and recalculate the area again, moving whichever pointer is smaller.
* Keep recalculating `maxArea` and shifting walls until the walls meet.

## 3Sum

* `O(n^3)`: brute force solution triple nested for loops.
* Sort array.
* Iterate throught the array.
* Create a `left` pointer that starts one index ahead and a `right` pointer that starts at the end.
* Once we reach `0`, `left` and `right` have to add up to `0`.
* While sum of `left` and `right` is less than the `target`, move `left` up.
* Otherwise, move `right` down.
* If values are the same, move `i` to avoid repeating the value.
* Once `left` and `right` are equal to each other, move `i` up one time and push items into a `results` array.

## Maximum Subarray

* Similar to *house robber* problem.
* Maximum value is either:
  * the value of the current index or
  * the previous sum.

## Best Time to Buy and Sell Stock

* `O(n^2)`: nested loops.
* For every value, find the smallest value before it and substract from it.

## Maximum Product Subarray

* Create two auxiliary arrays, a `maxUntilIndex` that calculates the biggest product, and a `minUntilIndex` that calculates the smallest product up until that index.
* Return the largest value in `maxUntilIndex`.

## Find Minimum in Rotated Sorted Array

* Assume array is sorted.
* `O(n)`: use *linear search* and check every item in the array.
* `O(log(n))`: use *binary search*.
* Check if the array is rotated, in *un-rotated* sorted array, first value is always the smallest.
* If array is *rotated*, the first value is greater than the last value.
* In *un-rotated* sorted array, all numbers to the `left` are smaller and all numbers to the `right` are larger.
* If number to `left` is larger, we are at the `minimum`.
* Otherwise, if number to the `right` is smaller, the number to the right is the minimum.
* Run *binary search*.
* Calculate `mid` value, using `left` and `right` pointers, checking if `mid` is at *inflection point*.
* If number to `left` of `mid` is larger, we are at the minimum.
  * If `mid` is greater than `left`, move `left` up to `mid`.
* Otherwise, if number to the `right` of `mid` is smaller, the number to the `right` is minimum.
  * If `mid` is smaller than `left`, move `right` down to `mid`.

* If input array is length `1`, return that number.
* Set initial values for `left` and `right` to first and last number of input array.
* If `left` value is less than `right` value, input array is *not rotated*, return `left` value.
* Run *binary search*.
  * If `mid` is at *inflection point*, return the `min`.
  * Else, change `left` or `right` and rerun *binary search*.

## Contains Duplicate

* Use a *hash map*.

## Product of Array Except Self

* Create an `output` array and fill it with `1`s.
* Multiply `output` from the `left`.
* Multiply `output` from the `right`.

## Search in Rotated Sorted Array

* Return the index where the array is rotated.
* Assume array is sorted.
* `O(log(n))`: use *binary search* on two sorted arrays rather than one.
* Find the `inflection` index.
* Use `inflection` index to perform the two separate binary searches.
* Return the `highest` of the values of the two indices returned from the 2 binary searches.
