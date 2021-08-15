const merge = require('./mergeArrays_teacher');

function mergeSort(arr){
  // base case
  if(arr.length <= 1 ) return arr;
  // I found the solution
  let middle = Math.floor(arr.length / 2);
  // Here we focus only in the "left side" of the array, 
  // it gonna return the recursive arrays
  // like [10, 24] ... then [10] then it hits the base case and return [10] 
  // and in the other hand, [ 76 , 73 ] ... then [ 76 ]
  let left = mergeSort(arr.slice(0, middle));
  // the right number is 24!! because we still in the left Merge sort
  let right = mergeSort(arr.slice(middle));

  // in the return it gonna pass the first return of the stack witch is 10 for left 24 for right merge will return [10, 24]
  // and soo on  

  return merge(left, right)
}

console.log("Merge",mergeSort([ 10 , 24 , 76 , 73 ]));

// in the right side the first array with length of 1 is [76]
// right side is [73]