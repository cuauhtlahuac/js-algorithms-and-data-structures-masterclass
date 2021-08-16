# Bubble Sort

[Sorting Slides](https://cs.slides.com/colt_steele/elementary-sorting-algorithms)

[Sorting Animation Website](https://www.toptal.com/developers/sorting-algorithms)

[Visual sorting](https://visualgo.net/en/sorting)

* [Bubble Sort](#bubble-sort)

* [What is sorting?](#what-is-sorting)

* [Javascript has a sort method](#javascript-has-a-sort-method)

* [Selection Sort](#selection-sort)

* [Insertion Sort](#insertion-sort)


* [Crazier Sorts](#crazier-sorts)
  * [Merge Sort](#merge-sort)

## What is sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

## Javascript has a sort method

...but it doesn't always work the way you expect.

```js
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]

[ 6, 4, 15, 10 ].sort();
// [ 10, 15, 4, 6 ]
```

That happen because this implementation transform each item into string, and then do a unicode codes comparison.

You can fix with a comparator function.

```js
function numberCompare(num1, num2) {
  ///
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ]
  .sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
```

The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
If it returns a negative number, a should come before b
If it returns a positive number, a should come after b,
If it returns 0, a and b are the same as far as the sort is concerned

## Bubble Sort

Sorting values, the largest value is bubble to the top.

[Check visual bubble sort algorithm](https://visualgo.net/en/sorting)

### Before we sort, we must swap!

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

In Javascript...
```js
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```
### BubbleSort Pseudocode

Let's visualize this!

Start looping from with a variable called i the end of the array towards the beginning
Start an inner loop with a variable called j from the beginning until i - 1
If arr[j] is greater than arr[j+1], swap those two values!
Return the sorted array

[go to code...](./../CourseExercises/BubbleSort/bubbleSort.js)

## Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

[ 5, 3, 4, 1, 2 ]
[ 5, 3, 4, 1, 2 ]
[ 5, 3, 4, 1, 2 ]
[ 5, 3, 4, 1, 2 ]
[ 1, 3, 4, 5, 2 ] - 1 is now in its sorted position!

### Selection Sort Pseudocode

* Store the first element as the smallest value you've seen so far.
* Compare this item to the next item in the array until you find a smaller number.
* If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
* If the "minimum" is not the value (index) you initially began with, swap the two values.
* Repeat this with the next element until the array is sorted.

[go to code...](./../CourseExercises/SelectionSort/selectionSort.js)

## Insertion Sort

[Insertion Sort slides ](https://cs.slides.com/colt_steele/elementary-sorting-algorithms#/14/0/6)

Builds up the sort by gradually creating a larger left half which is always sorted

It's mean that you need to sort from left to right and search for the correct place of the next right current element.

[ _5_, **3**, 4, 1, 2 ]

[ _3, 5_, **4**, 1, 2 ]

[ _3, 4, 5_, **1**, 2 ]

[ _1, 3, 4, 5_, **2** ]

[ **1, 2, 3, 4, 5** ]


### Insertion Sort Pseudocode

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted.

[Go to code...](./../CourseExercises/InsertionSort/insertionSort.js)

# "Crazier" Sorts

**Intermediate sorting algorithms.**

[https://cs.slides.com/colt_steele/intermediate-sorting-algorithms](Slides)

## FASTER SORTS
There is a family of sorting algorithms that can improve time complexity from O(n) to O(n log n)
There's a tradeoff between efficiency and simplicity
The more efficient algorithms are much less simple, and generally take longer to understand

## Merge sort

Was created in 1948

It's a combination of two things - merging and sorting!
Exploits the fact that arrays of 0 or 1 element are always sorted
Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (divide and conquer)

### Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

#### Merging Arrays Pseudocode

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    - Once we exhaust one array, push in all remaining values from the other array


### MergeSort Pseudocode

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

### Big O of mergeSort

If we start with an array of **8** elements, we split it into two pieces. How many time we have to split in order to get the last one element... in this case is **3**.

What if we have an array of 32 elements?

| 32 | * **1**

| 16 | 16 |  * **2**

|8 | 8 | 8 | 8 | * **4**

| 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | * **8**

| 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | * **16**

|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|    (we finally end with **32** elements and **5** splits)

If we pay attention we would notice that the proportion of:

**8 * 3** = 2 * 2 * 2 or **2^3** and **32 * 5** = 2 * 2 * 2 * 2 * 2 or **2^5**

This proportion of 8 = 3 and 32 = 5 means that's **O(log n)**

if we add the **O(n)** that we do with the merge operation we finally got:

**O(n log n)**

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ---------------------- | ------------------------- | ----------------------- | ---------------- |
| O(n log n)             | O(n log n)                | O(n log n)              | O(n)             |



