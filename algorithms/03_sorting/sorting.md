# Sorting

- In JavaScript:
  - `sort()` sorts the elements of an array _in place_ and returns the sorted array (_mutates_ the
    original array).
  - `sort()` converts numbers to strings by grabbing the character code at the first index.

```javascript
const letters = ['a', 'b', 'c', 'r']
const basket = [2, 65, 34, 2, 1, 7, 8]

const spanish = ['único', 'árbol', 'cosas', 'fútbol']

spanish.sort((a, b) => {
  return a.localeCompare(b)
})
```

## Stability in sorting algorithms

- **Stability**: a sorting algorithm is stable if two objects with equal keys appear in the same
  order in the sorted output as they appear in the input array.
- A _stable_ sort compares the value of the elements and preserves the original order of the input
  set, whereas the _unstable_ algorithm does not distinguish between two or more items.
- _Stable algorithms_:
  - Bubble Sort.
  - Insertion Sort.
  - Merge Sort.
  - Counting Sort.
  - Tim Sort.
- _Unstable algorithms_:
  - Heap Sort.
  - Selection Sort.
  - Shell Sort.
  - Quick Sort.
- Stability matters _if, and only if_, the problem to solve requires retention of that relative
  order. If we don't need stability, we can use a fast, memory-sipping algorithm like _quicksort_ or
  _heapsort_.

## Picking a sorting algorithm

- Note: it's _matematically impossible_ to beat `O(n log(n))`, because it means we have to sort by
  comparison.

- **Bubble sort**: teaching purposes (almost never).
- **Selection sort**: teaching purposes (almost never).
- **Insertion sort**: if the _input is small_ or items are _already or almost sorted_.
- **Merge sort**: _very fast_ (average and worst cases are both `O(nlog(n))`).
  - Space complexity can be a problem in large data sets.
- **Quick sort**: if _memory space_ is a problem (very large data sets). Better than _merge sort_ if
  pivot is picked properly.
  - Worst case is really slow `O(n^2)`.
- **Heap sort**: better space complexity than _quick sort_, but slower on average.

- **Radix sort**: _non-comparison sort_ algorithm.
- **Counting sort**: _non-comparison sort_ algorithm.

```javascript
//#1 - Sort 10 schools around your house by distance:
Insertion sort (small dataset)

//#2 - eBay sorts listings by the current Bid amount:
Radix or counting sort (bids are fixed-length integers)

//#3 - Sport scores on ESPN
Quick sort (efficient in time/space complexity, scores probably aren't already sorted)

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
Merge sort (worst case is better than quick sort and we aren't sorting in memory)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
Insertion sort (old reviews are probably already sorted)

//#6 - Temperature Records for the past 50 years in Canada
Radix or counting sort (if temperatures have no decimal places)
Quick sort (if decimal places)

//#7 - Large user name database needs to be sorted. Data is very random.
Merge sort (if we have enough memory)
Quick sort (if not worried about worst case and I can pick a good pivot)

//#8 - You want to teach sorting for the first time
Bubble sort, selection sort
```

## Resources

- [Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell](https://www.bigocheatsheet.com/)
- [Sorting (article) | Selection sort | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting)
- [What is stability in sorting algorithms and why is it important? - Stack Overflow](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)
- [Sorting Algorithms | Brilliant Math & Science Wiki](https://brilliant.org/wiki/sorting-algorithms/)
- [Big-O Algorithm Complexity Cheat Sheet (Know Thy Complexities!) @ericdrowell](https://www.bigocheatsheet.com/)
- [Sorting Algorithms Animations | Toptal](https://www.toptal.com/developers/sorting-algorithms)
- [Notes on algorithms - DEV Community 👩‍💻👨‍💻](https://dev.to/hexangel616/notes-on-algorithms-36pi)
- [Stability in sorting algorithms - GeeksforGeeks](https://www.geeksforgeeks.org/stability-in-sorting-algorithms/)
