def is_anagram(s1, s2):
    """ (str, str) -> bool

    Return True if and only if s1 is an anagram of s2.

    >>> is_anagram("silent", "listen")
    True
    >>> is_anagram("anagram", "nagaram")
    True
    >>> is_anagram("bear", "breach")
    False
    >>> is_anagram("cat", "rat")
    False
    """

    s1_sorted = list(s1)
    s1_sorted.sort()

    s2_sorted = list(s2)
    s2_sorted.sort()

    return s1_sorted == s2_sorted


if __name__ == "__main__":
    import doctest

    doctest.testmod()
