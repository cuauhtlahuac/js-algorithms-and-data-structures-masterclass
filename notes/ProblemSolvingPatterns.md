# Problem Solving Patterns

[slides](https://cs.slides.com/colt_steele/problem-solving-patterns)

- [Problem Solving Patterns](#problem-solving-patterns)
  - [Frequency Counter](#frequency-counter)
    - [Example](#example)
    - [Naive Solution. N^2](#naive-solution-n2)
    - [Refactored](#refactored)
  - [Multiple Pointers](#multiple-pointers)
    - [Example](#example-1)
    - [NAIVE SOLUTION](#naive-solution)
    - [REFACTOR](#refactor)
    - [countUniqueValues](#countuniquevalues)

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

### NAIVE SOLUTION

Here we run over each number until the other side, to check the condition.

*Time Complexity - O(N^2)*

*Space Complexity - O(1)*

```js
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
```

### REFACTOR

*Time Complexity - O(N)*

*Space Complexity - O(1)*

```js
function sumZero(arr){
    // Define a first pointer at the start of the array
    let left = 0;
    // Define a second pointer at the end
    let right = arr.length - 1;
    // While Left is less than right...
    while(left < right){ 
        // get the sum of both
        let sum = arr[left] + arr[right];
        // the sum is equal to zero? ... BINGO!
        if(sum === 0){
            return [arr[left], arr[right]];
        // sum less tha zero? ... move the right pointer one left position
        } else if(sum > 0){
          right--;
          // sum is more than zero? ... move the left pointer one right position
        } else {
            left++;
        }
    }
}
```

### countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

[My Solution](../PersonalExercises/UniqueValues.js);

