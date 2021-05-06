
# Big O Notation

[slides](https://cs.slides.com/colt_steele/big-o-notation)

## Need for Big O Notation

- Which is the best solution of the 20 solutions for a problem?
- What does better mean?
  1. **Faster**?
  2. **Less memory**?
  3. More readable?

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