# Problem Solving Patterns

[slides](https://cs.slides.com/colt_steele/problem-solving-patterns)

- [Frequency Counter](#Frequency-Counter)
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many more!

## Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values. Comparison of values or pieces of data.

This can often avoid the need for nested loops or **O(N^2)** operations with arrays / strings

**Example**

Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.

```
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```