function selectionSort(arr) {
	// * Store the first element as the smallest value you've seen so far.
	let smallestIndex = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			// * Compare this item to the next item in the array until you find a smaller number.
			if (arr[smallestIndex] > arr[j + 1]) {
				// * If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
				smallestIndex = j + 1;
			}

			// * If the "minimum" is not the value (index) you initially began with, swap the two values.
			if (arr[j] === arr[arr.length - 1]) {
				let temp = arr[i];
				arr[i] = arr[smallestIndex];
				arr[smallestIndex] = temp;
			}
		}

		// * Repeat this with the next element until the array is sorted.
		smallestIndex = i + 1;
	}
	return arr;
}

console.log(
	selectionSort([ 43, 56, 23, 1, 10, 7, 2, 89, 3, 88, 4, 90, 99, 652 ]),
);
