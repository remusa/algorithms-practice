# Binary Search

To find the target element by reducing the search area by half each time. Make sure the array on
which the binary search algorithm is used on is sorted, else it's impossible to make assumptions
about its content.

## Pseudocode

```
Repeat until the (sub)array is of size 0:
    Calculate the middle point of the current (sub)array
    If the target element is the middle element, stop
    Else if it's less than the middle:
        End point is now just to the left of the current middle, repeat
    Else if it's greater than the middle:
        Start point is now just to the right of the current middle, repeat
```

```
If no items
    Return false
If middle item is target_element
    Return true
Else if target_element < middle item
    Update end point
    Search left half
Else if target_element > middle item
    Update start point
    Search right half
```

## References

- [Binary Search Algorithm | Interview Cake](https://www.interviewcake.com/concept/python/binary-search?)
- [Binary search (article) | Algorithms | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
- [BINARY search with FLAMENCO dance - YouTube](https://www.youtube.com/watch?v=iP897Z5Nerk)
  [Notes on algorithms - DEV Community 👩‍💻👨‍💻](https://dev.to/hexangel616/notes-on-algorithms-36pi)
- [Introduction to Binary Search (Data Structures & Algorithms #10) - YouTube](https://www.youtube.com/watch?v=6ysjqCUv3K4)
