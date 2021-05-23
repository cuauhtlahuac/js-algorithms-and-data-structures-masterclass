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
     1. Sudocode.
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

  3. Look back and refactor.

1. Master commons problems solving patterns. 

 