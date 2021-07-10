# Searching Algorithms.

[Slides](https://cs.slides.com/colt_steele/tries-21)

Objectives

- [Searching Algorithms.](#searching-algorithms)
  - [What a searching algorithm is](#what-a-searching-algorithm-is)
    - [JavaScript has search!](#javascript-has-search)
      - [They are linear search](#they-are-linear-search)
        - [Let write a linear search function code.](#let-write-a-linear-search-function-code)

## What a searching algorithm is

### JavaScript has search!
There are many different search methods on arrays in JavaScript:

indexOf
includes
find
findIndex

They are almost the same.

#### They are linear search

The linear search means that we gonna search item by item until we found and If we doesn't found  it then return something like false.

[Wiki definition](https://en.wikipedia.org/wiki/Linear_search#cite_note-FOOTNOTEKnuth1998%C2%A76.1_(%22Sequential_search%22)-1):

> In computer science, a linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.

> Linear search is rarely practical because other search algorithms and schemes, such as the **binary search algorithm*** and **hash tables**, allow significantly faster searching for all but short lists.

##### Let write a linear search function code.

**Linear Search Pseudocode**

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

[go to code...](../CourseExercises/LinearSearch/linearCode.js)
