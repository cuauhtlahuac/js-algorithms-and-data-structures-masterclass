# Searching Algorithms.

[Slides](https://cs.slides.com/colt_steele/tries-21)

Objectives

- [Searching Algorithms.](#searching-algorithms)
  - [What a searching algorithm is](#what-a-searching-algorithm-is)
    - [JavaScript has search!](#javascript-has-search)
      - [They are linear search](#they-are-linear-search)
        - [Let's write a linear search function code.](#lets-write-a-linear-search-function-code)
    - [Binary Search](#binary-search)
      - [Let's write a Binary search function.](#lets-write-a-binary-search-function)

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

##### Let's write a linear search function code.

**Linear Search Pseudocode**

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

[go to the code...](../CourseExercises/Searching/linearSearch.js)

### Binary Search

Binary search is a much faster form of search
Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
Binary search only works on sorted arrays!

It is like the Yellow Guide example, you don't search page by page, you search first for the middle an so on.

#### Let's write a Binary search function.

**Binary Search Pseudocode**:

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
- Create a pointer in the middle
- If you find the value you want, return the index
- If the value is too small, move the left pointer up
- If the value is too large, move the right pointer down
- If you never find the value, return -1

[Go to the code ...](../CourseExercises/Searching/binarySearch.js)
