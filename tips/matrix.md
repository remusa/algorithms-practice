# Matrix

## Assign Numbers in Minesweeper

- Assume there're no duplicates in the bombs.

```
mine_sweeper(bombs, num_rows, num_cols)
mine_sweeper([[0, 0], [0, 1]], 3, 4)

def mine_sweeper(bombs, num_rows, num_cols):
    field = new int[num_rows][num_cols] // each value = 0

    for bomb in bombs:
        row_i = bomb[0]
        col_i = bomb[1]
        field[row_i, col_i] = -1

        for i from row_i -1 to row_i + 1:
            for j from col_i - 1 to col_i + 1:
                if (0 <= i < num_rows and 0 <= j < num_cols and field[i][j] != -1):
                    field[i][j] += 1

    return field
```

## Find Where to Expand in Minesweeper

- Since a matrix is one way of representing a graph, we can use _breadth-first seach_ or
  _depth-first search_.
- _Depth-first search_: takes `O(n*m)` space (we have to store the entire array) and `O(n*m)` time
  (because we need to traverse the entire array).
- _Breadth-first search_: takes `O(2(n+m)` space (we only need to store the positions of the outer
  edges) and `O(n*m)` time (we still need to traverse the entire array).

```
click(field, 3, 5, 0, 1)
click(field, num_rows, num_cols, given_i, given_j)

def click(field, num_rows, num_cols, given_i, given_j):
    to_check = new Queue()

    if field[given_i][given_j] == 0:
        field[given_i][given_j] = -2
        to_check.queue([given_i, given_j]) // array or tuple
    else:
        return field

    while not to_check.empty():
        [current_i, current_j] = to_check.dequeue()

        for i from current_i -1 to current_i + 1:
            for j from current_i - 1 to current_i + 1:
                if (0 <= i < num_rows and 0 <= j < num_cols and field[i][j] == 0):
                    field[i][j] = -2
                    to_check.enqueue([i, j])

    return field
```

## Rotating a 2D Array by 90 Degrees

- Can be solved _out-of-place_ (creating and returning a new array) or _in-place_ (modifying the
  original array).

```
// Out-of-place solution
def rotate_sub(i, j, n):
    return j, n - 1 - i

def rotate(given_array, n):
    rotated = copy(given_array) // or initialize a new array to 0s

    for i from 0 to n - 1:
        for j from 0 to n - 1:
            [new_i, new_j] = rotate_sub(i, j, n)
            rotated[new_i, new_j] = given_array[i][j]

    return rotated

// In-place solution
def rotate_sub(i, j, n):
    return j, n - 1 - i

def rotate(given_array, n):
    for i from 0 to ceiling(n/2) - 1:
        for j from 0 to floor(n/2) - 1:
            temp = [-1, -1, -1, -1]
            (current_i, current_j) = (i, j)

            for k from 0 to 3:
                tmp[k] = given_array[current_i][current_j]
                (current_i, current_j) = rotate_sub(current_i, current_j, n)

            for k from 0 to 3:
                given_array[current_i, current_j] = tmp[(k - 1) % 4]
                (current_i, current_j) = rotate_sub(current_i, current_j, n)

    return given_array
```

## Spiral Matrix

- Walk in a clockwise direction (right, down, left, up).
- Go `right` and insert the values into a temporary array.
- Push the temporary array into another array and change direction.
- Once we have gone through the matrix, return the rotated matrix.

## Set Matrix Zeroes

### Brute force solution

- Create another matrix and use that to create the desired output.

### O(1) space complexity

- If the first row or column need to be set to `0`s, do that last.
- Loop over the first row and check if there are `0`s.
- If there are, store that info in a variable `firstRowHasZero` and set it to `true`.
- Loop over the first column and check if there are `0`s.
- If there are, store that info in a variable `firstColumnHasZero` and set it to `true`.
- Go over the rest of the matrix and check for `0`s.
- If there are, modify the first row and column.
- Make `0`s cells **not** in first row and first column based on previous flags.
- Make `0`s all cells in first row based on `firstRowHasZero` flag.
- Make `0`s all cells in first column based on `firstColumnHasZero` flag.

## Word Search

- Once a cell is used it can't be reused.
- Visit every cell and find the first character of the word.
- Once the first character is found, run **Depth-First Search** to traverse adjacent cells for the
  next character.
- Mark visited cells as _visited_.
