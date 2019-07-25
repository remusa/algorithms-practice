# Sorting

* In JavaScript:
  * `sort()` sorts the elements of an array *in place* and returns
  the sorted array (*mutates* the original array).
  * `sort()` converts numbers to strings by grabbing the character code at the
    first index.

```javascript
const letters = ['a', 'b', 'c', 'r']
const basket = [2, 65, 34, 2, 1, 7, 8]

const spanish = ['único', 'árbol', 'cosas', 'fútbol']

spanish.sort((a, b) => {
    return a.localeCompare(b)
})
```

## Stability in sorting algorithms

* **Stability**: a sorting algorithm is stable if two objects with equal keys
  appear in the same order in the sorted output as they appear in the input
  array.
* A *stable* sort preserves the original order of the input set, whereas the *unstable* algorithm does not distinguish between two or more items.
* *Stable algorithms*:
  * Bubble Sort.
  * Insertion Sort.
  * Merge Sort.
  * Counting Sort.
  * Tim Sort.
* *Unstable algorithms*:
  * Heap Sort.
  * Selection Sort.
  * Shell Sort.
  * Quick Sort.
* Stability matters *if, and only if*, the problem to solve requires
  retention of that relative order. If we don't need stability, we can use a
  fast, memory-sipping algorithm like *quicksort* or *heapsort*.

## Resources

* [Sorting (article) | Selection sort | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting)
* [What is stability in sorting algorithms and why is it important? - Stack Overflow](https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)
