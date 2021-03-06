# Strings

## Non-Repeating Character

- Iterate thtough the entire string, character by character.
- Keep track of the number of ocurrences using a _hash map_.
- Iterate through the entire string again and find the character in the hash map with an occurence
  count of 1.

```
# O(n)
def non_repeating(given_string):
    char_count = {}

    for c in given_string:
        if c in char_count:
            char_count[c] += 1
        else:
            char_count[c] = 1

    for c in given_string:
        if char_count[c] == 1:
            return c

    return null
```

## One Away Strings

- One edit away means one change makes the two strings equivalent.
- Three allowed operations:
  - _Change_: take a character and turn it into something else.
  - _Delete_: delete a character.
  - _Add_: add a character.

```
# O(n)
def is_one_away_same_length(s1, s2):
    count_diff = 0

    for i from 0 to s1.length - 1:
        if s1[i] != s2[i]:
            count_diff += 1

            if count_diff > 1:
                return false

    return true

# s1.length == s2.length + 1
def is_one_away_diff_lengths(s1, s2):
    i = 0
    count_diff = 0

    while i < s2.length:
        if s1[i + count_diff] == s2[i]:
            i += 1

        else:
            count_diff += 1

            if count_diff > 1:
                return false

    return true

# Main function
def is_one_away(s1, s2):
    if s1.length - s2.length >= 2 or s2.length - s1.length >= 2:
        return false

    else if s1.length == s2.length:
        return is_one_away_same_length(s1, s2)

    else if s1.length > s2.length:
        return is_one_away_diff_lengths(s2, s1)
```

## Length of Longest Substring

- Can be solved in `O(n)` by using a _sliding window_ approach.
- The _sliding window_ will represent the current substring of non-repeating characters.
- The _sliding window_ will be dynamic (grow or shrink in size as we iterate through the string).
- The current index and value in the for loop will _always be the end_ of the sliding window. As the
  end of the window increases, we conditionally increase the start of the window.

- Steps:
  1. Initialize the window at index 0
  2. Initialize end of window and current iteration of loop at 0
  3. Keep track of the current character and the index it was last seen at in a hash table
  4. Increment the length of the max substring if the current substring is made of unique
     characters.
  5. If we find a repeated character, move the end of the window to the current index, and move the
     start of the window one index above the last time the repeated character was found (the value
     of its key in the hash table).
  6. Update the value of the repeated character key to the current index.

```
// O(n)
loop through the input string:
    if current_character in hash_map && index >= start:
        set start to index for character found in hash_map + 1

    set key-value pair on hash_map to the current character index

    if length of current_window is greater than max:
        set max to length of current_window

    return max
```

## Length of Longest Palindrome

- Use the _expand around the center_ approach.
- Make the center be both the character we are iterating on AND the space in between each character.

## Valid Palindrome

- Naive solution is reversing the string, but it would be `O(n)`.
- A palindrome is a word where each half mirrors each other.

- Steps:
  1. Sanitize input by removing non-alphanumeric characters and lowercasing it.
  2. Create a left and right pointers at the start and end of the string.
  3. While the left pointer is less than the right one, check if characters are equal. If they
     aren't, return false.
  4. Return true.

## Resources

- [Here is a 10-line template that can solve most 'substring' problems - LeetCode Discuss](https://leetcode.com/problems/minimum-window-substring/discuss/26808/here-is-a-10-line-template-that-can-solve-most-substring-problems)
