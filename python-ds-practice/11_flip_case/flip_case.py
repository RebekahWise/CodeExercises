def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'
        """
    lst = list(phrase)
    swapped = ''
    for letter in lst:
        if letter.lower() == to_swap.lower():
           swapped = swapped + letter.swapcase()
        else: swapped = swapped + letter
    print(swapped)