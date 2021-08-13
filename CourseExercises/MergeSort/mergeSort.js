const mergingArrays = require('./mergingArrays');

function mergeSort(array) {
	// * Break up the array into halves until you have arrays that are empty or have one element
	function breakArrayHelper(array) {
		const copiedArrayFirst = array.slice(0, array.length / 2);
		const copiedArraySecond = array.slice(array.length / 2, array.length);

		console.log({ copiedArrayFirst, copiedArraySecond });
		function breakRecursive(first, second) {
			if (first && first.length < 2) {
				return first;
			} else if(second && second.length < 2){
				return second;
			}
			
			const current1 = first.slice(0,  first.length / 2);
			const current2 = second.slice(second.length / 2,  second.length);
			console.log({ first, current1, second, current2 });
			return breakRecursive(current1, current2)

		}
		return breakRecursive(array);
	}
	// * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
	return breakArrayHelper(array);
	// * Once the array has been merged back together, return the merged (and sorted!) array
}

console.log("Merge",mergeSort([ 1, 2, 3, 5, 6, 4, 91, 54 ]));
