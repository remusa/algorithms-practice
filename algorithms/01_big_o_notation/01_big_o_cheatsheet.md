# Big-O Cheat Sheet

## Big O

- **O(1) Constant**: no loops.
- **O(log N) Logarithmic**: usually searching algorithms have log n if they are sorted (Binary
  Search).
- **O(n) Linear**: for loops, while loops through n items.
- **O(n log(n)) Log Linear**: usually sorting operations.
- **O(n^2) Quadratic**: every element in a collection needs to be compared to ever other element.
  Two nested loops.
- **O(2^n) Exponential**: recursive algorithms that solves a problem of size N (like fibonacci).
- **O(n!) Factorial**: you are adding a loop for every element.

- Notes:
  - Iterating through half a collection is still O(n)
  - Two separate collections: O(a \* b)

## What causes time complexity

- Operations (+, -, \*, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

## Rule Book

- Rule 0: Big-O always represents the worst case.
- Rule 1:
  - Different steps are **added (+)**.
  - Nested steps are **multiplied (\*)** (ex.: nested loops).
- Rule 2: Remove constants.
- Rule 3: Different inputs => different variables. `O(a+b)`.
  - Example: `a` and `b` arrays nested would be `O(a*b)`.
- Rule 4: Drop non-dominant terms. Keep the fastest growing term (biggest exponent).

## What causes space complexity

- Variables
- Data Structures
- Function Call
- Allocations
