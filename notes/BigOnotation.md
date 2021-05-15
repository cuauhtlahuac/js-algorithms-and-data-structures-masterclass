
# Big O Notation

[slides](https://cs.slides.com/colt_steele/big-o-notation)
[Good Info](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)

## Need for Big O Notation

- Which is the best solution of the 20 solutions for a problem?
- What does better mean?
  1. **Faster**?
  2. **Less memory**?
  3. More readable?

### Explanation

- Big O is for detect how the runtime of an algorithm grows as the inputs grow. The relationship about the input size and the time.
- Example:
  - f(n) linear (f(n) = n ): Means, if the input grows then the run time grows as well, is 1 to 1 proportion
  - f(n) quadratic (f(n) = n^2): Means if the input grows the run time will grow twice.
  - f(n) constant (f(n) = 1): If the input grows it doesn't matter, the run time will ever be the same.
  - f(n) **Could be something entirely different!**.

### Notation

- O(1) : Linear form, if the input grow the run time (output) won't be affected. 
- O(n) : Apply to for example a for loop or two, doesn't matter if the operation is 5n (5 for loops), we going to simplify to O(n).
- O(n^2): In case of nested loops we have `O(n)*O(n) = O(n^2)`. If your input has 3 times to execute with the nested loop will be 3^3, that is always the square of the cycles number.
  Check the example:

  ```js
    function printAllPairs(n){
      for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
          console.log(i, j);
        }
      }
    }

    printAllPairs(3) // it will print 9 pairs
    printAllPairs(5) // it will print 25 pairs
  ```

  ![freecodecamp BigO Graphic](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)


#### Exercise

[reverse implementations](https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript), which one is the best?

Write a function that accepts a string input and return a reversed copy

```js

// Solution with mayor points
 function reverse(s){
    return s.split("").reverse().join("");
}
```

### Timing out code (time complexity)

- let see two functions:

First One:

- Is a for loop
- It takes about 1.25 seconds to perform the operation, and will be increased if the input number grows

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

Second one:

- Is only a mathematical formula.
- It's only performs three operation
- It takes only 0.000001 seconds always, no matter the input number 

```js
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

We can used **timers** to test the speed:

```js
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```

- Don't be obsessed with the time, only if the difference is significant

### Counting operations

Let's count the number of simple operations that the computer has to perform

In a for loop we may have ...

`=` = 1 assignment
`<=` n comparison
`i++` n additions and assignments

depending of the numbers of n we can say for example 5n or 3n, depends of the number of operations

### Simplify Big O Notation

It's a matter of convert for example:
 - O(500) = O(1)
 - 5n + 2 = O(n); O(2n) = O(n);
 - O(13n^2) = O(n^2)

#### Big O Shorthands

**constants**
  1. Arithmetic operations are **constants**: The computer doesn't matter if is 2 * 2 or a 1000000 * 2.
  2. Variable assignment
  3. Accessing elements in an array by index or object by key.
  4. A limited loop only if doesn't run all the n input, for example:
  ```js
    function logAtMost5(n) { // It never be more than 5, it's almost a constant
      for(let i = 1; i <= Math.min (5, n); i++){
        console.log(i);
      }
    }
  ```

  ### Space complexity in JS

  - Most primitives are constants space. Doesn't matter if is 1 or 100000000,l it will take the same amount of space.
  - Strings require O(n) space.
  - Reference types are O(n), length of array or keys for Objects
  
  for example:

  ```js
    let total = 0; // This is O(1), no matter the amount of the number the space is the same
  ```

  ```js
    let newArr = []

    for(let val of arr){
      newArray.push(); // O(n) space, because if the array grows the space will grow
    }
  ```

  ### Logarithms

  - log2(8) = 3  -----> 2^3 = 8
  - log2(value)=exponent ------> 2^exp = value
  - The logarithm of a number roughly measures the number of times you can divide a number by 2 **before you get a value that's less than or equal to one**.

  example: 

  ```js
    8/2 = 4
    4/2 = 2
    2/2 = 1
    1 // hit the one number
    // log(8) = 3
  ```

  ```js
    25/2 = 12.5
    12.5/2 = 6.25
    6.25/2 = 3.125
    3.125/2 = 1.5625
    1.5625/2 = 0.78125
    0.78125 // Here is less than one
    // log(25) = 4.64 proximally. with base 2 of course
  ``` 