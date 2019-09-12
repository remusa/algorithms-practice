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

## Maximum Subarray

## Best Time to Buy and Sell Stock

* 

## Maximum Product Subarray

## Find Minimum in Rotated Sorted Array

## Contains Duplicate

## Product of Array Except Self

## Search in Rotated Sorted Array
