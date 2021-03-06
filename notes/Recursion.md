# Recursion

[slides](https://cs.slides.com/colt_steele/searching-algorithms-22).

  - [What is recursion?](#what-is-recursion)
  - [Martin & The Dragon](#martin--the-dragon)
  - [Recursion It's EVERYWHERE!](#recursion-its-everywhere)

## What is recursion?
A process (a function in our case) that calls itself

## Martin & The Dragon

MARTIN: Excuse me Mr. Dragon,

Are any of these numbers odd?

(3142 5798 6550 5914)

-----
ANGRY DRAGON!: Sorry boy, I'll only tell you if the first number in that list is odd.

-----
MARTIN: Ok fine, what about the first number in this list?

(**3142** 5798 6550 5914)

DRAGON: NOT ODD!

----
MARTIN: And what about the first number in this other list?

(5798 6550 5914)

DRAGON: NOT ODD!

... Goes until the final of the list

MARTIN: Ok fine, what about the first number in this list?

( )

DRAGON: That's an empty list you moron! There isn't a number in there!

## Recursion It's EVERYWHERE!

JSON.parse / JSON.stringify
document.getElementById and DOM traversal algorithms
Object traversal
Very common with more complex algorithms
It's sometimes a cleaner alternative to iteration

## How recursive functions work
Invoke the same function with a different input until you reach your base case!

### Base Case
The condition when the recursion ends.

This is the most important concept to understand

### Two essential parts of a recursive function!
Base Case
Different Input

## Our first recursive function
```js
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

[Check someRange example function here](../CourseExercises/Recursion/sumrange.js)


## Factorial

The form to write a factorial is number with a exclamation sign after: 4!

The factorial means that the number will be multiply for the previous numbers like:

4 * 3 * 2 * 1

[factorial function here](../CourseExercises/Recursion/factorial.js)

## Helper Method Recursion

We have two functions, one is the normal main, the other is the recursive that is inside of the main function.

The principal issue that we solve with this method is avoid the re-assignation of values in the variables inside of the function

like the next example:

```js
function collectOdds(nums){
  let result = [] // This variable will be reassigned every time
  collectOdds...
}
```

example of how to use correctly this method in order to use the variable that we need.

```js
  function outer(input){
    
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    
    helper(input)

    return outerScopedVariable;

}
```

[Helper Method Recursion](../CourseExercises/Recursion/helperMethodRecursion.js)

### Solved with Pure Recursion

[Helper Method With Pure Recursion](../CourseExercises/Recursion/helperMethodPureRecursion.js)


