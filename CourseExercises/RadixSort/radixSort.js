const Radix = require("./radixSortClass");

// - Define a function that accepts list of numbers
function radixSort(num){
  const radix = new Radix(num);
// - Figure out how many digits the largest number has
const numLength = radix.countDigits();
// - Loop from k = 0 up to this largest number of digits
for (let k = 0; k < numLength; k++) {
  // - For each iteration of the loop:
  // - Create buckets for each digit (0 to 9)
  // - place each number in the corresponding bucket based on its kth digit
  console.log(k);
  
}

// - Replace our existing array with values in our buckets, starting with 0 and going up to 9
// - return list at the end!
  return num
}

console.log(radixSort(345));