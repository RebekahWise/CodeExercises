def list_check(lst):
    if all(isinstance(num,list) for num in lst):
        print(True)
    else: print(False)
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
