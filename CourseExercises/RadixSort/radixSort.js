const Radix = require('./radixSortClass');

// - Define a function that accepts list of numbers
function radixSort(list) {
	const radix = new Radix(list);
	// - Figure out how many digits the largest number has
	radix.mostDigitNumbers();
  
	// - Loop from k = 0 up to this largest number of digits
	for (let k = 0; k < radix.maxDigitNumber; k++) {
    // - For each iteration of the loop:
    // - Create buckets for each digit (0 to 9)
    let buckets = radix.createBuckets(0, 10);
		// - place each number in the corresponding bucket based on its kth digit
    for (let i = 0; i < list.length; i++) {
      const number = list[i];
      
      const kthDigit = radix.getDigitPositionTeacherMethod(number,k);

      buckets[kthDigit].push(number);
    }
    
		// - Replace our existing array with values in our buckets, starting with 0 and going up to 9
    
    console.log({ k, buckets, number: list[k], max: radix.maxDigitNumber });
	}

		// - return list at the end!
		return list;
}

console.log(radixSort([ 20, 41, 6673, 897, 234, 12, 38, 69, 345, 98789456, 25 ]));
