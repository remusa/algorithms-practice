# Dynamic Programming

## Jump Game

* Create a new array with every value set to `false`.
* Set the first value in the new array to `true`, since we can always reach the `0th` step.
* A new pointer, `j`, will start at the first step and loop until it meets up with `j`.
* If it's possible to reach `i step`, and `i step` can jump to `j step`, set `j step`'s DP value to `true`.
* Otherwise, keep `j step`'s DP value to `false`.
* Move `j` one index and start again, checking if the `i step` can reach `j`.
* Return the last value in DP array, to say if possible to reach last step.

## Unique Paths

* Start at the `top-left` square.
* Create a matrix where the first row and the first column are set to `1` and the rest are `empty` (because the first row and the first column are both one path only).
* Since there are `2` unique paths to reach the `2x2` square, because it's the same as adding the values of the `top` and `left` squares together.
* Keep doing that for the rest of the squares until we reach the `bottom-right` square.

## Climbing Stairs

* First three `ways` matches the `steps`.
* From `4` onwards, `ways` is a fibonnaci sequence, a sum of the two previous values of `ways`.
