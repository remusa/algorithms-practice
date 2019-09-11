# Intervals

## Merge Intervals

* Create a results array.
* Loop through the items and put the first item inside the `results` array.
* Check the next interval, if the next interval intersects with the last interval in the `results` array, extend the last interval in the `results` array to the end of the current interval.
* If the next interval is shorter than the last interval in the `results` array, we don't need to do anything because it's already included in the last interval.
* Check the next interval, if it doesn't intersect with the last interval in the `results` array, push it to the `results` array.
