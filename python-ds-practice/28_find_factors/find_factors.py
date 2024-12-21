def find_factors(num):
    count =1
    factors = []
    while count <= num:
        if num % count == 0:
            factors.append(count)
        count = count + 1
    print(factors)

    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """
