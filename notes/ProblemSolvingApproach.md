# Problem Solving Approach

[slides](https://cs.slides.com/colt_steele/problem-solving-patterns)

Strategies are adapted from the book **how to solve it** by George Polya.

## What is an algorithm?

- A process or set of steps to accomplish a certain task.

## How do you improve?

1. Devise a plan for solving problems. (strategies)

  1. Understand the problem.
     1. Can I restate the problem in my own words?
     2. What are the inputs that go into the problem?
     3. What are the outputs that should come from the solution to the problem?
     4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
     5. How should I label the important pieces of data that are a part of the problem?

  2. Explore Concrete Examples.
     1. Start with Simple Example.
     2. Progress to more Complex Examples
     3. Explore Examples with empty Inputs
     4. Explore Examples with Invalid Inputs


 ```js
 // Write a function which takes in a string and returns counts of each character in the string
 
// Easy examples 
charCount("aaaaa"); // {a: 4}
charCount("hello"); // {h: 1, e: 1, l: 2, o: 1 }

// More complex
charCount("My phone Number is 178951"); // spaces?, Numbers? , LowerCase?, Uppercase?
charCount(""); // Empty what should return?
 ``` 

  1. Break it down.
     1. Pseudocode.
        * Explicitly write out the steps you need to take
        * Just the basic components of the solution

        ```js
        // Write a function which takes in a string and returns counts of each character in the string
          
          // Return an object with keys that are lowercase alphanumeric chars in the string; 
        
        charCount(str){
          // make object to return at end

          // loop over string, for each character...
            // if the char is a number/letter AND is a key in object, add one to count
            // if the char is a number/letter AND is not in object, add it to the object and set value to 1
            // if character is something else (space, period, etc.) don't do anything

          // return object at end
        }
        ```

  2. Solve/Simplify.
     1. Find the core difficulty in what you're trying to do.
     2. Temporarily ignore that difficult
     3. Write a simple solution
     4. Then incorporate that difficulty back in.

  Maybe you can start with the first character with a hard code text or you can loop the text and print each char.
  Just Start with the main logic. If you stock with some method you can google latter.

  3. Look back and refactor. ( Most important if you want to improve as developer )
     1. Can you check the result?
     2. Can you derive the result differently?
     3. Can you understand it at a glance (take a brief or hurried look)?: Can Some one else understand you solution?
     4. Can you use the result or method for some other problem?
     5. Can you improve the performance of your solution?
     6. Can you think of other ways to refactor?
     7. How have other people solved this problem?

#### Final Solution to CharCount.

```js
function charCount(str) {
  const obj = {};
  for(let char of str){
    // if(/[a-z0-9]/.test(char)) { slowest version
    if(isAlphanumeric(char)) {
      char = char.toLowerCase(); // transform after check if is valid
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// check alphanumeric with charAtCode is a fastest way than regex
function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  if(
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (0-9)
    !(code > 96 && code < 123) // lower alpha (a-z)
    )
    {
      return false
    }

  return true;
}
```

**hint**: take a look at [charAtCode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) method.

Master commons problems solving patterns.

 