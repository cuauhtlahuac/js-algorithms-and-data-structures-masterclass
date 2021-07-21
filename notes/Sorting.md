# Bubble Sort

[Sorting Slides](https://cs.slides.com/colt_steele/elementary-sorting-algorithms)

[Sorting Animation Website](https://www.toptal.com/developers/sorting-algorithms)

[Visual sorting](https://visualgo.net/en/sorting)

[Bubble Sort](#bubble-sort)
[What is sorting?](#what-is-sorting)
[Javascript has a sort method](#javascript-has-a-sort-method)

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