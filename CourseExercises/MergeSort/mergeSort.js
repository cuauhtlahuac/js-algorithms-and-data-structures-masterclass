const mergingArrays = require('./mergingArrays');

function mergeSort(array) {
	// * Break up the array into halves until you have arrays that are empty or have one element
	const copiedArrayFirst = array.slice(0, array.length / 2);
	const copiedArraySecond = array.slice(array.length / 2, array.length);
	function breakArrayHelper(arr1, arr2) {
		if(!arr1 || !arr1.length || arr1.length < 2){
			return arr1;
		}
		if(!arr2 || !arr2.length || arr2.length < 2){
			return arr2;
		}
		const nextArr1 = arr1.slice(0, arr1.length / 2)
		const nextArr2 = arr2.slice(arr2.length / 2, arr2.length)
		//const l = mergingArrays(nextArr2, nextArr2)
		console.log({arr1,  arr2, });
		 return breakArrayHelper(nextArr1, nextArr2);
	}

	breakArrayHelper(copiedArrayFirst, copiedArraySecond)


	// * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
	// * Once the array has been merged back together, return the merged (and sorted!) array
}

console.log("Merge",mergeSort([ 1, 2, 3, 5, 6, 4, 91, 54 ]));
