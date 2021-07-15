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

		// If the value is too small, move the left pointer up and ignore all the rest of the list
		if (sortArr[middlePointer] < value) {
			leftPointer = middlePointer;
		} else {
			// If the value is too large, move the right pointer down
			rightPointer = middlePointer;
		}
	}

	// If you never find the value, return -1
	return -1;
}

const { timer } = new CheckTime(new Date());

timer(binarySearch([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 7));
timer(binarySearch([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 2));
timer(binarySearch(createLargeSortedArray(100), 67));
timer(binarySearch(createLargeSortedArray(10000), 150));
timer(binarySearch(createLargeSortedArray(100), 101));

function createLargeSortedArray(large) {
	let newArr = new Array();
	for (let index = 0; index < large; index++) {
		newArr.push(index);
	}
	return newArr;
}
