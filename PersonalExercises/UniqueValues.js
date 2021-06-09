/*

Implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

*/

function countUniqueValues(array) {
  let j = 0;
  const total = [array[j]];
  const length = array.length;
  
  for (let i = 1; i < length; i++) {
    if( array[j] !== array[i] ){
      total.push(array[i])
      j = i;
    }  
  }
  console.log(total.length);
  return total.length;
}


countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7