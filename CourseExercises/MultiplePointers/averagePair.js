/**
 * Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 */

function averagePair(arr, avg) {
	// add whatever parameters you deem necessary - good luck!
	if (arr.length < 1) return false;

	let start = 0;
	let end = 0;
	let base = 2 * avg;

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		const current = base - element;
		for (let j = 1; j < arr.length; j++) {
			const element = arr[j];
			if (current === element) return true;
		}
	}
	return false;
}

console.log(averagePair([ 1, 2, 3 ], 2.5)); // true
console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8)); // true
console.log(averagePair([ -1, 0, 3, 4, 5, 6 ], 4.1)); // false
console.log(averagePair([], 4)); // false
