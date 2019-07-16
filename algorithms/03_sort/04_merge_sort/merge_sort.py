def merge_sort(L, p, r):
    """ (list) -> NoneType

    Complexity:
        - Best-case: O(n log(n))
        - Avg-case: O(n log(n))
        - Worst-case: O(n^2)

    >>> L = [3, 7, 12, 14, 2, 6, 9, 11]
    >>> merge_sort(L, 0, len(L) - 1)
    >>> L
    [2, 3, 6, 7, 9, 11, 12, 14]
    """

    if p < r:
        q = (p + r) // 2

        merge_sort(L, p, q)
        merge_sort(L, q + 1, r)
        merge(L, p, q, r)


def merge(L, p, q, r):
    """ (list, int, int, int) -> list
    Takes in a list that has two sorted subarrays, from [p..q] and [q+1..r], and merges the lists
    """

    # Initialize temporary arrays
    low_half = []
    high_half = []

    # Initialize the indices
    k = p
    i = 0
    j = 0

    #  Fill in the temporary arrays
    while k <= q:
        low_half.append(L[k])
        i += 1
        k += 1

    while k <= r:
        high_half.append(L[k])
        j += 1
        k += 1

    # Reset the indices
    k = p
    i = 0
    j = 0

    # Repeatedly compare the lowest untaken element in low_half with the lowest untaken element in high_half and copy the lower of the two back into array
    while i < len(low_half) and j < len(high_half):
        if low_half[i] < high_half[j]:
            L[k] = low_half[i]
            i += 1
        else:
            L[k] = high_half[j]
            j += 1
        k += 1

    # Once one of low_half and high_half has been fully copied back into array, copy the remaining elements from the other temporary array back into the array
    while i < len(low_half):
        L[k] = low_half[i]
        i += 1
        k += 1

    while j < len(high_half):
        L[k] = high_half[j]
        j += 1
        k += 1

    return L


if __name__ == "__main__":
    import doctest

    doctest.testmod()
