# Palindrome

A palindrome is a word that is read the same front-to-back or back-to-front. For instance, R A C E C A R reversed is also R A C E C A R. However, BLUE reversed is EULB, and thus not a palindrome.

## Algorithm 1: Reverse the string. Compare the reversed string to the original string.

- For example, the reverse of the string `"noon"` is `"noon"`. Since the reversed string is the same as the original string, `"noon"` is a palindrome.

```python
# manually reverse the string
def is_palindrome(s):
    # reverse the string
    reversed_string = ""
    for char in s:
        reversed_string = char + reversed_string

    return s == reversed_string

# use string slicing to reverse the string
def is_palindrome(input_string):
    return input_string == input_string[::-1]
```

## Algorithm 2: Split the string into two halves. Reverse the second half. Compare the first half to the reversed second half.

- For example, the first half of the string `"noon"` is `"no"` and the second half is `"on"`. The reverse of the second half is `"no"`. Since the first half is equal to the reverse of the second half, `"noon"` is a palindrome.
- For a string with an odd length, let's consider `"racecar"`. When splitting the string into two halves, we omit the middle character, `"e"`. The first half of the string is `"rac"` and the second half of the string is `"car"`. The reverse of the second half is `"rac"`. Since the first half is equal to the reverse of the second half, `"racecar"` is a palindrome.

```python
# use string slicing to get the two halves and compare them
def is_palindrome(s):
    # The number of chars in s.
    n = len(s)

    # Compare the first half of s to the reverse of the second half.
    # Omit the middle character of an odd-length string.
    return s[:n // 2] == reverse(s[n - n // 2:])
```

## Algorithm 3: Compare the first character to the last, the second to the second last, and so on. Stop when the middle of the string is reached.

- For example, for string `"noon"`, we compare the first character (`"n"`) to the last character (`"n"`), and the second character (`"o"`) to the second last (`"o"`). Since both pairs of characters that were compared are equal, `"noon"` is a palindrome.
- For a string with an odd length, let's consider `"racecar"`. We compare the first character (`"r"`) to the last character (`"r"`), the second character (`"a"`) to the second last (`"a"`), and the third character (`"c"`) to the third last character (`"c"`). The middle character, `"e"` does not need to be compared with anything. Since all pairs of characters that were compared are equal, `"racecar"` is a palindrome.

```python
def is_palindrome(s):
    # s[i] and s[j] are the next pair of characters to compare.
    i = 0
    j = len(s) - 1

    # The characters in s[:i] have been successfully compared to those in s[j:].
    while i < j and s[i] == s[j]:
        i = i + 1
        j = j - 1

    # If we exited because we successfully compared all pairs of characters,
    # then j <= i.
    return j <= i


    # for version
    for i in range(len(s) // 2):
        if s[i] != s[len(s) - i - 1]:
            return False
    return True
```