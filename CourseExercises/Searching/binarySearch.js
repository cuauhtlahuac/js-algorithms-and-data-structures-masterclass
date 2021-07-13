const CheckTime = require('../utils/timer');

// This function accepts a sorted array and a value
function binarySearch(sortArr, value) {
	// Create a left pointer at the start of the array, and a right pointer at the end of the array
	let leftPointer = 0;
	let rightPointer = sortArr.length - 1;
  // While the left pointer comes before the right pointer:
	while (leftPointer < rightPointer) {
    // Create a pointer in the middle
		let middlePointer = Math.round((leftPointer + rightPointer) / 2);
    
		// If you find the value you want, return the index
		if (value === sortArr[middlePointer]) return middlePointer;
    
		// If the value is too small, move the left pointer up
		if (sortArr[leftPointer] < value) {
      leftPointer++;
		}

    // If the value is too large, move the right pointer down
		if (sortArr[rightPointer] > value) {
      rightPointer--;
		}
	}

	// If you never find the value, return -1
	return -1;
}

const { timer } = new CheckTime(new Date());

timer(binarySearch([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 7));
timer(binarySearch([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 11));
