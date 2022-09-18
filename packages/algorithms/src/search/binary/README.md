# Binary search

1. Begin with the mid element of the whole array as a search key.
2. If the value of the search key is equal to the item then return an index of the search key.
3. Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half.
4. Otherwise, narrow it to the upper half.
5. Repeatedly check from the second point until the value is found or the interval is empty.