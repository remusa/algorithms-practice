# Dynamic Programming

## Jump Game

* Create a new array with every value set to `false`.
* Set the first value in the new array to `true`, since we can always reach the `0th` step.
* A new pointer, `j`, will start at the first step and loop until it meets up with `j`.
* If it's possible to reach `i step`, and `i step` can jump to `j step`, set `j step`'s DP value to `true`.
* Otherwise, keep `j step`'s DP value to `false`.
* Move `j` one index and start again, checking if the `i step` can reach `j`.
* Return the last value in DP array, to say if possible to reach last step.
