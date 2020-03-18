def binary_search(L, item):
    """ (list, object) -> int

    Precondition: L is sorted from smallest to largest, and
    all the items in L can be compared to v.

    Return the index of the first occurrence of v in L, or
    return -1 if v is not in L.

    >>> binary_search([2, 3, 5, 7], 2)
    0
    >>> binary_search([2, 3, 5, 5], 5)
    2
    >>> binary_search([2, 3, 5, 7], 8)
    -1
    >>> binary_search([2, 3, 5, 7], 7)
    3
    """

    low = 0
    high = len(L) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = L[mid]

        if guess == item:
            return mid
        elif guess < item:
            low = mid + 1
        else:
            high = mid - 1

    return -1
    # if start == len(L) or L[start] != item:
    #     return -1
    # else:
    #     return start


if __name__ == "__main__":
    import doctest

    doctest.testmod()
