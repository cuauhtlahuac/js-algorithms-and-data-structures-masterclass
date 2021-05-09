
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

### Notation

- O(1) : Linear form, if the input grow the run time (output) won't be affected
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