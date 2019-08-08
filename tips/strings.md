# Strings

## Non-Repeating Character

* Iterate thtough the entire string, character by character.
* Keep track of the number of ocurrences using a *hash map*.
* Iterate through the entire string again and find the character in the hash map
  with an occurence count of 1.

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

* One edit away means one change makes the two strings equivalent.
* Three allowed operations:
  * *Change*: take a character and turn it into something else.
  * *Delete*: delete a character.
  * *Add*: add a character.

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
