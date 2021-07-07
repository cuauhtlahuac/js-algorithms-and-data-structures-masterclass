/**
 * Write a function called recursiveRange
 * which accepts a number and adds up all the numbers from 0 to the number passed to the function.
*/

function recursiveRange(num){
  if(num <= 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55 
console.log(recursiveRange(1000)); // 500500 
console.log(recursiveRange(10000)); // 50005000 
console.log(recursiveRange(9999)); // 49995000 