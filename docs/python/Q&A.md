# **Python - Q&A**

## Sets

- [x] Find if a set is a subset of another

    ```py
    >>> {1, 2}.issubset([1, 2, 3, 4])
    True
    ```

    issubset accept any iterable as an argument.

- [x] Find differences between sets

    Subtraction between sets can achieve that

    ```py
    a = {1, 2, 6}
    b = {1, 2, 3}
    >>> a - b
    {6}
    >>> b - a
    {3}
    ```
