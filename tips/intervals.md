# Intervals

## Merge Intervals

* Create a results array.
* Loop through the items and put the first item inside the `results` array.
* Check the next interval, if the next interval intersects with the last interval in the `results` array, extend the last interval in the `results` array to the end of the current interval.
* If the next interval is shorter than the last interval in the `results` array, we don't need to do anything because it's already included in the last interval.
* Check the next interval, if it doesn't intersect with the last interval in the `results` array, push it to the `results` array.

## Can Attend Meetings

* Put `start` and `end` times in two separate arrays and sort them.
* Loop through the `starts` array.
* Check if `start` time one index ahead is less than end time at current index.
* If element at one index ahead is smaller than the `end` array at the current index, return `false` since he can't attend both meetings (there's an intersection).
* Otherwise return `true`.
