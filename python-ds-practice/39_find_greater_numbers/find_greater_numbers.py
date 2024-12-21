def find_greater_numbers(nums):
    count = 0
    for num in nums:
        i = (nums.index(num) + 1)
        while i < len(nums):
            if num < nums[i]:
                count = count + 1
            i = i+1
    print(count)



    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        4

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
    """