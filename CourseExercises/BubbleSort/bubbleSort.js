//Start looping from with a variable called i the end of the array towards the beginning
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		//Start an inner loop with a variable called j from the beginning until i - 1
		for (let j = 0; j < arr.length; j++) {
			//If arr[j] is greater than arr[j+1], swap those two values!
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	//Return the sorted array
	return arr;
}

console.log(bubbleSort([ 43, 56, 23, 1, 10, 89, 88, 90, 99, 652]));
