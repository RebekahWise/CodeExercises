def same_frequency(num1, num2):
    sort1 = sorted(str(num1))
    sort2 = sorted(str(num2))
    print(sort1 == sort2)

    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    