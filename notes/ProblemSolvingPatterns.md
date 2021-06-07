# Problem Solving Patterns

[slides](https://cs.slides.com/colt_steele/problem-solving-patterns)

- [Problem Solving Patterns](#problem-solving-patterns)
  - [Frequency Counter](#frequency-counter)
    - [Example](#example)
    - [Naive Solution. N^2](#naive-solution-n2)
    - [Refactored](#refactored)
  - [Multiple Pointers](#multiple-pointers)
    - [Example](#example-1)

## Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values. Comparison of values or pieces of data.

This can often avoid the need for nested loops or **O(N^2)** operations with arrays / strings

### Example

Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.

```
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```
### Naive Solution. N^2

Naive: No the best possible solution.

```js
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf is an other loop
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}
```

### Refactored

```js
function same(arr1, arr2){
  // First question is have similar lengths
  if(arr1.length !== arr2.length){
      return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  // first we fill the object with each value of the  arr1
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  } //  it create something similar to {1:1, 2:2, 3:1}

  // second, we fill the object with each value of the  arr2
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }

  // here we iterate over the first object
  for(let key in frequencyCounter1){
    // Then we ask for the quadratic first key value don't exist in the second object
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      // Then if exist we ask if they don't have the same value, thats means we count two, or three or n times the same key(number).
      // it is like { 4: 2 } the quadratic of 2 happens two times
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  
  return true
```

It could be 3(n), but we simplify to O(n)

## Multiple Pointers

It is well to creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

### Example

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

[my code solution](../PersonalExercises/SumZero.js)

