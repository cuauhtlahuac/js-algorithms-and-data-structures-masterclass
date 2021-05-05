
# Big O Notation

[slides](https://cs.slides.com/colt_steele/big-o-notation)

## Need for Big O Notation

- Which is the best solution of the 20 solutions for a problem?

#### Exercise

[reverse implementations](https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript), which one is the best?

Write a function that accepts a string input and return a reversed copy

```js

// Solution with mayor points
 function reverse(s){
    return s.split("").reverse().join("");
}
```

