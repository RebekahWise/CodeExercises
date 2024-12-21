def vowel_count(phrase):
    letter_count = {}
    for letter in phrase:
        lower_letter = letter.lower()
        if lower_letter in "aeiou":
            if lower_letter in letter_count:
                letter_count[lower_letter] += 1
            else: letter_count[lower_letter] = 1
    print(letter_count) 
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """