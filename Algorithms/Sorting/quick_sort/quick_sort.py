def quick_sort(L, p, r):
    """ (list) -> NoneType

    Complexity:
        - Best-case/avg-case: O(n)
        - Avg-case: O(n log(n))
        - Worst-case: O(n^2)

    >>> L = [3, 7, 12, 14, 2, 6, 9, 11]
    >>> quick_sort(L, 0, len(L) - 1)
    >>> L
    [2, 3, 6, 7, 9, 11, 12, 14]
    """

    if p < r:
        q = partition(L, p, r)

        left = quick_sort(L, p, q - 1)
        right = quick_sort(L, q + 1, r)


def partition(L, p, r):
    """ (list, int, int) -> NoneType

    >>> L = [3, 7, 12, 14, 2, 6, 9, 11]
    >>> partition(L, 0, len(L) - 1)
    2
    """

    q = p

    j = p
    while j < r:
        # for j in range(p, r):
        # Compare array[j] with array[r], for j = p, p+1,...r-1 maintaining that:
        #  array[p..q-1] are values known to be <= to array[r]
        #  array[q..j-1] are values known to be > array[r]
        #  array[j..r-1] haven't been compared with array[r]

        # If array[j] > array[r], just increment j.

        # If array[j] <= array[r], swap array[j] with array[q],
        #   increment q, and increment j.
        if L[j] <= L[r]:
            L[j], L[r] = L[r], L[j]
            q += 1

        j += 1

    # Once all elements in array[p..r-1]
    #  have been compared with array[r],
    #  swap array[r] with array[q]
    L[r], L[q] = L[q], L[r]

    # Return q
    return q


if __name__ == "__main__":
    import doctest

    doctest.testmod()

    # L = [3, 7, 12, 14, 2, 6, 9, 11]
    # print(L)
    # quick_sort(L, 0, len(L) - 1)
    # print(L)
