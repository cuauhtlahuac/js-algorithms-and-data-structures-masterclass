# Bubble Sort

[Sorting Slides](https://cs.slides.com/colt_steele/elementary-sorting-algorithms)
[Sorting Animation Website](https://www.toptal.com/developers/sorting-algorithms)

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