const CheckTime = require('../utils/timer');

// Original Solution
function binarySearchOriginal(arr, elem) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	if (arr[middle] === elem) {
		return middle;
	}
	return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
}

const { timer } = new CheckTime(new Date());

timer(binarySearch([ 2, 5, 6, 9, 13, 15, 28, 30 ], 103));
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
