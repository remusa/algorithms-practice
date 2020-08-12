# Intervals

## Merge Intervals

- Create a results array.
- Loop through the items and put the first item inside the `results` array.
- Check the next interval, if the next interval intersects with the last interval in the `results`
  array, extend the last interval in the `results` array to the end of the current interval.
- If the next interval is shorter than the last interval in the `results` array, we don't need to do
  anything because it's already included in the last interval.
- Check the next interval, if it doesn't intersect with the last interval in the `results` array,
  push it to the `results` array.

## Meeting Rooms

- Put `start` and `end` times in two separate arrays and sort them.
- Loop through the `starts` array.
- Check if `start` time one index ahead is less than end time at current index.
- If element at one index ahead is smaller than the `end` array at the current index, return `false`
  since he can't attend both meetings (there's an intersection).
- Otherwise return `true`.

## Non-overlapping Intervals

- Sort array by starting array values.
- Loop through every second element in the sorted array.
- Check if the current interval intersects with the previous interval, if so remove it.
- Return the number of removals made.
- We should remove the least possible number of elements.

### Least removals

- Sort array by starting array values.
- Loop through every second element in the sorted array.
- Check if the current interval intersects with the previous interval, if so remove the interval
  with the highest `end`.
