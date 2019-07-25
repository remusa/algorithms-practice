"""
    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

    Note: For the purpose of this problem, we define empty string as valid palindrome.

    Example 1:

    Input: "A man, a plan, a canal: Panama"
    Output: true

    Example 2:

    Input: "race a car"
    Output: false
"""


def is_palindrome(input_string):
    """ (str, str) -> bool

    Return True if and only if s1 is an anagram of s2.

    >>> is_palindrome("race a car")
    False
    >>> is_palindrome("A man, a plan, a canal: Panama")
    True
    """

    if input_string == "":
        return True

    for i in range(len(input_string) // 2):
        if input_string[i] != input_string[-i - 1]:
            return False

    return True


if __name__ == "__main__":
    import doctest

    doctest.testmod()
