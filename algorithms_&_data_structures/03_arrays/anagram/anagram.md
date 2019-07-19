# Anagram

A string s1 is an anagram of string s2 if its letters can be rearranged to form s2. For example, ’listen’ is an anagram of ’silent’,’admirer’ is an anagram of ’married’. For this question, a word is considered to be an anagram of itself.

def is_anagram(s1, s2):
    """ (str, str) -> bool

    Return True if and only if s1 is an anagram of s2.

    >>> is_anagram("silent", "listen")
    True
    >>> is_anagram("bear", "breach")
    False
    """