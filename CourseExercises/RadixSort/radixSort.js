const Radix = require("./radixSortClass");

// - Define a function that accepts list of numbers
function radixSort(list){
  const radix = new Radix(list);
  // - Figure out how many digits the largest number has
  radix.mostDigitNumbers();
// - Loop from k = 0 up to this largest number of digits

  const bucket = []
for (let k = 0; k < radix.maxDigitNumber; k++) {
  // - For each iteration of the loop:
  // - Create buckets for each digit (0 to 9)
bucket[k] = k;
  // - place each number in the corresponding bucket based on its kth digit
  
  console.log({k,bucket});
}

// - Replace our existing array with values in our buckets, starting with 0 and going up to 9

// - return list at the end!
  return list;
}

console.log(radixSort([2,4,667,897,234,12,3,6,345, 98789457]));
