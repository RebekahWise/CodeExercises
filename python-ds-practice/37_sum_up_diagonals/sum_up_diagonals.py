def sum_up_diagonals(matrix):
    sum = 0
    i = 0
    for lists in matrix:
        sum = sum + lists[i]
        i = i + 1
    i = -1
    for lists in matrix:
        sum = sum + lists[i]
        i = i - 1
    print(sum)

    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """